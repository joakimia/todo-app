export const apiFetchXkcdLink = async () => {
      const URL = `https://egszlpbmle.execute-api.us-east-1.amazonaws.com/prod`;

      try {
            const xkcdResponse = await fetch(URL).then(response => response.json());
            
            return {
                  src: xkcdResponse.img,
                  alt: xkcdResponse.alt,
                  title: xkcdResponse.title,
            }  
      } catch (error) {
            console.log('Error in (apiFetchXkcdLink): ', error);
      }
};