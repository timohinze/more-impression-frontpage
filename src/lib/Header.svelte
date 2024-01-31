
<header>
    <div class="logo">
        <h2>Logo</h2>
        
    </div>
    
    <ul>
        <li> Werkstatt </li>
        <li> Archiv</li>
        <li> Shop</li>
        <li> Handsatz Generator</li>
    </ul>

</header>


<style>
    header{
        display: flex;
        flex-direction: row;
        font-size: 1.2rem;
    }

    h2{
        margin: 3.5rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    .logo{
        margin-right: 2em;
    }

    ul{
        display: flex;
        align-items: center;
    }

    li{
        list-style-type: none;
        margin-right: 2rem;
            align-items: center;
    }

    li:last-child{
        margin-left: 5rem;
        color: red;

  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: .075em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end)
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

</style>