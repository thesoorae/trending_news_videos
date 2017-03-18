

export const fetchAllVideos = ()=>{
  return $.ajax({
      method: 'GET',
      url: 'https://api.ajplus.net/v2/cards?platform=tvos'
  });
};


export const fetchVideo = (id) => {
  return $.ajax({
      method: 'GET',
      url: `https://api.ajplus.net/v2/cards/${id}`
    });
  };
