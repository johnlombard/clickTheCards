(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,image:"https://images.gr-assets.com/books/1442726934l/4865.jpg",clicked:!1},{id:2,image:"https://images.gr-assets.com/books/1442577801l/159964.jpg",clicked:!1},{id:3,image:"https://images.gr-assets.com/books/1442239711l/472331.jpg",clicked:!1},{id:4,image:"https://images.gr-assets.com/books/1499958451l/5617966.jpg",clicked:!1},{id:5,image:"https://images.gr-assets.com/books/1440319389l/4981.jpg",clicked:!1},{id:6,image:"https://images.gr-assets.com/books/1420585954l/23692271.jpg",clicked:!1},{id:7,image:"https://images.gr-assets.com/books/1439857546l/25942786.jpg",clicked:!1},{id:8,image:"https://images.gr-assets.com/books/1279479806l/746936.jpg",clicked:!1},{id:9,image:"https://images.gr-assets.com/books/1397772877l/10883.jpg",clicked:!1},{id:10,image:"https://images.gr-assets.com/books/1476030398l/29868612.jpg",clicked:!1},{id:11,image:"https://images.gr-assets.com/books/1303439193l/81959.jpg",clicked:!1},{id:12,image:"https://images.gr-assets.com/books/1348336780l/1052.jpg",clicked:!1}]},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(3),i=a.n(c),r=(a(15),a(4)),o=a(5),l=a(7),m=a(6),u=a(8),d=(a(17),function(e){return s.a.createElement("nav",{className:"navbar "},s.a.createElement("ul",null,s.a.createElement("li",{className:"brand",onClick:e.handleIncrement},"Clicky Game"),s.a.createElement("li",{class:""},"You guessed correctly!"),s.a.createElement("li",null,"Hello "+e.CurrentScore)))}),g=function(){return s.a.createElement("div",{className:"jumbotron"},s.a.createElement("h1",null,"Your Project"),s.a.createElement("p",null,"Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris magna exercitation. Aliquip reprehenderit magna elit cillum adipisicing dolore aliquip velit. Ipsum ullamco nostrud tempor eu deserunt ipsum incididunt fugiat esse ipsum. Exercitation nostrud exercitation sit ex nostrud aliqua officia magna nostrud deserunt et esse eu deserunt. Non dolor consequat qui ea culpa tempor magna nulla consectetur est occaecat."))},p=(a(19),function(e){return s.a.createElement("div",{className:"cover"},s.a.createElement("img",{src:e.image,alt:e.name,onClick:function(){return e.handleIncrement(e.id)}}))}),h=function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"game"},e.children))},k=a(1),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={Covers:k,CurrentScore:0,HighScore:0,Clicked:[1,2]},a.handleIncrement=function(e){a.state.Clicked.includes(k.id)?a.setState({CurrentScore:a.state.CurrentScore+1}):a.setState({CurrentScore:a.state.CurrentScore+111})},a.shuffle=function(e){return e.sort(function(){return Math.random()-.5})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(d,{CurrentScore:this.state.CurrentScore}),s.a.createElement(g,null),s.a.createElement(h,null,s.a.createElement("div",{className:"row col-12"},this.shuffle(this.state.Covers).map(function(t){return s.a.createElement(p,{image:t.image,id:t.id,handleIncrement:e.handleIncrement})}))))}}]),t}(n.Component);i.a.render(s.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.25b2859d.chunk.js.map