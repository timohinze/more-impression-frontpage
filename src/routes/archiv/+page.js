
// export const load = async ({ fetch }) => {
//     try {
//       const response = await fetch(
//         'https://more-impression.com/wp-json/api/archiv'
//       )
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`)
//       }
//       const projects = await response.json()
//       return { projects }
//     } catch (error) {
//       console.error(error)
//       return { error: 'Unable to fetch projects' }
//     }
//   }

export const prerender = true;