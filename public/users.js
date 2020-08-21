const saveKeys = (keys) =>{
    return new Promise((resolve) => {
        chrome.storage.sync.set(keys, (result) => resolve(result));
    })
}

(async () => {

    const users = [...document.getElementsByClassName("media-body")].reduce((pr, cur) => {

        if(cur.childNodes.length === 3) {
    
            return {...pr, [cur.childNodes[2].innerText]: cur.childNodes[1].innerText  };
    
        } else {
    
            return pr;
    
        }
    
    }, {});

    await saveKeys({ users : JSON.stringify(users) });
    
})();
