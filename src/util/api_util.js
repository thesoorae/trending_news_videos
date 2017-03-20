

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

export const fetchEmotions = (id) => {
return $.ajax({
  method: 'GET',
  url: `https://api.ajplus.net/v2/cards/${id}/reactions`
});
};

export const postEmotion = (video) => {
  return $.ajax({
    method: 'POST',
    url: `https://api.ajplus.net/v2/cards/${video.nid}/react`,
    reaction: video.reaction  
  });
};
