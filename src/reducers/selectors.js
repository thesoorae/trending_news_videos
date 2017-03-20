export const selectTenVideos = (videos) => {
  return videos.slice(0,10);
};

export const formatDate = (string) =>{
  let t= string.slice(0,10);
  t = t.split('-');
  var d = new Date(t[0], t[1]-1, t[2]);
  let month = d.toLocaleString("en-us", {month: "long"});
  let day = d.getDate();
  let year = d.getFullYear();
  return `${month} ${day}, ${year}`;
};
