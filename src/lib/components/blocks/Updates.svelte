<script>
  // Function to fetch and process the Markdown file
  async function loadUpdates() {
    try {
      const response = await fetch('./my_updates.md');
      const text = await response.text();

      // Split the text into lines and create list items
      const lines = text.split('\n');
      const listItems = lines.map(line => `<li>${line}</li>`).join('');

      // Add the list items to the unordered list in the HTML
      document.getElementById('updatesList').innerHTML = listItems;
    } catch (error) {
      console.error('Error fetching or processing the Markdown file:', error);
    }
  }

  // Call the function when the script runs
  loadUpdates();
</script>


<p>Website</p>
<ul id="updatesList"></ul>


