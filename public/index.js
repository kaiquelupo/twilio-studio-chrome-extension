const getKeys = (keys) => {
    return new Promise((resolve) => {
        chrome.storage.sync.get(keys, function(result) {
            resolve(result)
        });
    })
}

window.onload = async () => {

    const rawUsers = (await getKeys(["users"])).users;

    if(rawUsers) {

        document.getElementsByClassName("ui-component-table-row")[0].childNodes[4].innerText = "USER EMAIL"; 

        const users = JSON.parse(rawUsers);

        var target = document.getElementsByClassName("create-wrapper")[0];

        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if(mutation.type === "attributes") {

                    document.querySelectorAll("a[href='/console/project/users']").forEach(elem => {
                        elem.innerText = users[elem.innerText] || elem.innerText
                    });

                } 
            });
        });

        var config = { attributes: true, childList: true, characterData: true }
        observer.observe(target, config);

  
    } else {

        console.log("No users");

    }

}

