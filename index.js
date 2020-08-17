 const fetchAvatar = async () => {
   const login=document.getElementById('userlogin').value
   const orgUrl = 'https://api.github.com/users/'+login
   try {
     const fetchResult = await fetch(orgUrl)
     const orgData = await fetchResult.json()
     const fetchAvatarResult = await fetch(orgData.avatar_url)
     let imgAvatar=fetchAvatarResult.url
     const container=document.getElementById('div1')
    //  container.removeChild
     const imgElement = document.createElement("img")
     imgElement.setAttribute("src", imgAvatar)
     imgElement.style.width="200px"
     container.appendChild(imgElement)
   }
   catch(err) {
     const h1Element = document.createElement('h1');
     h1Element.innerHTML = "Օգտատերը չի գտնվել"
     document.body.appendChild(h1Element)
   }
 }
