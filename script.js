*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#f4f7fb;
color:#333;
}

nav{
position:fixed;
top:0;
left:0;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
background:rgba(0,0,0,.35);
backdrop-filter:blur(10px);
z-index:1000;
}

.logo{
font-size:30px;
font-weight:700;
color:white;
}

nav ul{
display:flex;
list-style:none;
gap:35px;
}

nav a{
color:white;
text-decoration:none;
font-weight:600;
transition:.3s;
}

nav a:hover{
color:#4da3ff;
}

header{
height:100vh;
background:
linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),
url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600") center/cover;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
}

.hero{
max-width:850px;
padding:20px;
}

.hero h1{
font-size:60px;
color:white;
margin-bottom:20px;
}

.hero p{
font-size:22px;
color:white;
margin-bottom:35px;
}

.search{
display:flex;
justify-content:center;
background:white;
border-radius:50px;
overflow:hidden;
box-shadow:0 15px 40px rgba(0,0,0,.2);
}

.search input{
flex:1;
padding:18px;
border:none;
outline:none;
font-size:17px;
}

.search button{
background:#006AFF;
color:white;
border:none;
padding:18px 35px;
cursor:pointer;
font-size:17px;
transition:.3s;
}

.search button:hover{
background:#0055d6;
}

section{
padding:80px 8%;
}

.title{
text-align:center;
font-size:40px;
color:#006AFF;
margin-bottom:50px;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
gap:30px;
}

.card{
background:white;
border-radius:15px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,.12);
transition:.3s;
}

.card:hover{
transform:translateY(-10px);
}

.card img{
width:100%;
height:230px;
object-fit:cover;
}

.info{
padding:20px;
}

.info h3{
margin-bottom:10px;
}

.info p{
margin:8px 0;
}

.info h4{
font-size:28px;
color:#006AFF;
margin-top:15px;
}

.info button{
margin-top:20px;
padding:12px 30px;
background:#006AFF;
color:white;
border:none;
border-radius:8px;
cursor:pointer;
transition:.3s;
}

.info button:hover{
background:#0055d6;
}

.about{
max-width:900px;
margin:auto;
text-align:center;
font-size:20px;
line-height:1.8;
}

#contact{
text-align:center;
}

footer{
background:#111;
color:white;
text-align:center;
padding:35px;
}

@media(max-width:768px){

.hero h1{
font-size:40px;
}

nav{
flex-direction:column;
gap:15px;
}

nav ul{
flex-wrap:wrap;
justify-content:center;
}

.search{
flex-direction:column;
border-radius:20px;
}

.search button{
width:100%;
}

}
