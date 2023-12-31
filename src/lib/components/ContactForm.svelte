<script>
     let name = '';
     let email = '';
     let message = '';

     async function handleSubmit() {
       const formData = {
         name,
         email,
         message,
       };

       try {
         const response = await fetch('https://fabform.io/f/YOUR_FORM_ID', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(formData),
         });

         if (response.ok) {
           alert('Form submitted successfully!');
           // Reset form fields after successful submission
           name = '';
           email = '';
           message = '';
         } else {
           alert('Form submission failed.');
         }
       } catch (error) {
         console.error('Error submitting form:', error);
         alert('An error occurred while submitting the form.');
       }
     }
   </script>

   <style>
     /* Add your styling here */
   </style>

   <form on:submit|preventDefault={handleSubmit}>
     <label>
       Name:
       <input type="text" bind:value={name} />
     </label>

     <label>
       Email:
       <input type="email" bind:value={email} />
     </label>

     <label>
       Message:
       <textarea bind:value={message}></textarea>
     </label>

     <button type="submit">Submit</button>
   </form>
