const useFavicon = (url) => {

    const favicon  = document.getElementById('favicon');
    
    favicon.href = url;

    console.log(url)


}

export default useFavicon;