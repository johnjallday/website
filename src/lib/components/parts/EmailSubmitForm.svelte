<script>

	import { Send } from 'lucide-svelte';
	import toast, {Toaster} from 'svelte-french-toast'

	let name = '';
  let email = '';

	async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    try {
        const response = await fetch('/postdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        if (response.ok) {
            toast.success(`Thank you for contacting, ${name}! We will get back to you at ${email} soon.`);
            // Reset the form or handle the response as needed
        } else {
            // Handle errors
            toast.error('Something went wrong. Please try again.');
        }
    } catch (error) {
        // Handle network errors
        toast.error('Network error. Please try again.');
    }
	}

</script>

<form method="POST" action="/postdata" on:submit={handleSubmit}>
  <label>
    <input bind:value={name} name="name" type="text" placeholder="Name">
  </label>
  <label>
    <input bind:value={email} name="email" type="email" placeholder="Email">
  </label>
  <Toaster />
  <button type="submit"><Send /></button>
</form>


