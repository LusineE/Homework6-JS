const container=document.getElementById('div1')
const image=document.getElementsByTagName('img')[0]
const p1=document.getElementsByTagName('p')[1]
const fetchAvatar = async () => {
   const login=document.getElementById('userlogin').value
   const orgUrl = 'https://api.github.com/users/'+login
   try {
     const fetchResult = await fetch(orgUrl)
     const orgData = await fetchResult.json()
     const fetchAvatarResult = await fetch(orgData.avatar_url)
     const fetchLoginResult= orgData.login
     let imgAvatar=fetchAvatarResult.url
     image.setAttribute("src", imgAvatar)
     p1.innerHTML = fetchLoginResult
   }
   catch(err) {
     p1.innerHTML = "Օգտատերը չի գտնվել"
     image.setAttribute("src", "")
   }
}
