import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'roex290e', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: 'skZsLOXD8Z5xU5ZYu428GJdlfRiU6Y5eCU7DcuLgZVJlfHQ0Cho3DwpEGtHHm8tAbwG0WPAkV7eYAqQH0lUOKaUQDnSLLmYbsBUwsG1SEGHo14i6aGRLdU2Nv0IU0i2Xdrf5VKlxbJNXxZ1rFAXkvtYiYcEWjRYlyaZ0whpxICBwONk1DiJy', // Replace with your Sanity API token
});



export default client;


