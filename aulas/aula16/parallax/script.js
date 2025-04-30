jQuery('.parallax-layer').parallax({

    // jQuery object or selector of DOM node to use as mouseport
    mouseport: 'body',  
  
    // boolean | 0-1 | 'npx' | 'n%'
    xparallax: true,    
    yparallax: true,
  
    // 0-1 - Sets default alignment. Only has effect when parallax values are something other than 1 (or true, or '100%')
    xorigin: 0.5,     
    yorigin: 0.5,
  
    // 0-1 (0 instant, 1 forever) - Sets rate of decay curve for catching up with target mouse position
    decay: 0.66,    
  
    // Int (milliseconds)
    frameDuration: 30,      
  
    // String - Class added to layer when frozen
    freezeClass: 'freeze' 
    
  });