document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('searchbtn').addEventListener('click', function () {
    let query=''
    let search = document.getElementById('searchString').value
    if(search!=''){
        query+=search
    }
    let site = document.getElementById('searchSite').value
    if(site!=''){
        query+=' site:'+site
    }
    let related = document.getElementById('searchRelated').value
    if(related!=''){
        query+=' related:'+related
    }
    let inurl = document.getElementById('searchUrl').value
    if(inurl!=''){
        query+=' inurl:'+inurl
    }
    let url = "https://www.google.com/search?q="+query;
    let creating =  browser.tabs.create({ url: url })
    })

})