function description_Cricket(){
  var cricket = "<b><u>Cricket</u><br>Cricket is a bat-and-ball game played between two teams of eleven players each. The game is popular in many countries, particularly in England, Australia, India, and Sri Lanka. The objective of the game is for the batting team to score as many runs as possible while the fielding team tries to get the batsmen out. The game is played on a large oval-shaped field with a rectangular 22-yard-long pitch in the center. Cricket matches can last several hours or even days, with various formats including Test matches, One Day Internationals (ODIs), and Twenty20 (T20) matches. Cricket is known for its complex rules and strategies, as well as its unique terminology, such as wickets, boundaries, and LBW.&nbsp;&nbsp;<button onclick=\"location.href='../../Student2/Cricket.html';\">&nbsp;Click to more&nbsp;</button>";
    document.getElementById("description").innerHTML=cricket;
    }
    
    
    function description_Badminton(){
    var badminton="<b><u>Badminton</u><br>Badminton is a racket sport played by two or four players who hit a shuttlecock back and forth over a high net. The objective is to make the shuttlecock land within the boundaries of the opponent's court and to prevent the opponent from doing the same. The game can be played in singles or doubles, and players use lightweight rackets to hit the shuttlecock, which is made of feathers or synthetic materials. Badminton requires quick reflexes, agility, and good hand-eye coordination. Matches can be played in either best-of-three or best-of-five games, with each game being played to 21 points. Badminton is a popular sport in many countries, particularly in Asia and Europe.&nbsp;&nbsp;<button onclick=\"location.href='../Badminton content page/badminton.html';\">&nbsp;Click to more&nbsp;</button>";
    document.getElementById("description").innerHTML=badminton;
    }
    
    function description_Swimming(){
    var swimming="<b><u>Swimming</u><br>Swimming is a water-based sport in which an individual or a team of individuals move through the water by propelling themselves with their arms and legs. The objective of the sport is to swim the fastest over a designated distance or to complete a specific swimming technique. Swimming can be enjoyed recreationally or competitively, with various strokes such as freestyle, breaststroke, backstroke, and butterfly. Swimming is a low-impact form of exercise that provides cardiovascular benefits, improves muscle strength and endurance, and enhances overall fitness. The sport can be enjoyed in various bodies of water, including pools, lakes, rivers, and oceans. Swimming is a popular sport worldwide and is often included in the Olympic Games.&nbsp;&nbsp;<button onclick=\"location.href='../../Student3/Swimming/Swimming.html';\">&nbsp;Click to more&nbsp;</button>";
    document.getElementById("description").innerHTML=swimming;
    }
    
    function description_Football(){
    var football="<b><u>Football</u><br>Football, also known as soccer in some countries, is a team sport played between two teams of eleven players each. The objective of the game is to score goals by kicking a ball into the opposing team's goalpost while preventing the other team from doing the same. Football is played on a rectangular field with a goalpost on either end, and players use their feet, legs, and heads to control and pass the ball. The sport requires speed, agility, endurance, and teamwork, and various tactics and formations are employed by teams to gain an advantage. Football is the most popular sport in the world, with millions of fans and players worldwide, and major international competitions such as the FIFA World Cup and UEFA Champions League attract huge audiences.&nbsp;&nbsp;<button onclick=\"location.href='../../Student1/Football.html';\">&nbsp;Click to more&nbsp;</button>";
    document.getElementById("description").innerHTML=football;
    }
    

    var thumbnails = document.getElementById("thumbnails")
    var imgs = thumbnails.getElementsByTagName("img")
    var main = document.getElementById("main")
    var counter=0;
    
    
    
    function pagecolor(color){
      document.body.style.background=color;
      }
      function textcolor(color){
      document.getElementById("description").style.color=color;
      document.body.style.color=color;
      document.getElementById("quatoes").style.color=color;
      }
      function textsize(size) {
        document.getElementById("description").style.fontSize = size;
        document.description.style.fontSize= size
        document.getElementById("quatoes").style.fontSize = size;
      }
      
      
      
    
    
    for(let i=0;i<imgs.length;i++){
      let img=imgs[i]
     img.addEventListener("mouseover",function(){
      main.src=this.src
    })
      
    }
    
    