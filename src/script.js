export function handleButtonClick() {
  // FUNCTION FROM GETTING API TO HERE
    // const quoteEndpoint = "https://api.quotable.io/random";
    
    // fetch(quoteEndpoint)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const quoteEl = document.querySelector(".quote");
    //     const authorEl = document.querySelector(".author");
  
    //     if (quoteEl && authorEl) {
    //       quoteEl.textContent = data.content;
    //       authorEl.textContent = `— ${data.author}`;
    //     }
    //   })
      // .catch((error) => {
      //   console.error("Error fetching quote:", error);
      // });



    // FUNCTION FOR GETTING QUOTES FROM MANHWA IN ARRAY 
    const manhwaQuotes = [
        // Academy Genius Swordsman
        "“A sword is not just steel; it’s an extension of my will.” — Academy Genius Swordsman",
        // Bad Ending Maker
        "“I decide how this story ends—no more tragic finales.” — Bad Ending Maker",
        // Boundless Necromancer
        "“Even death is a resource, if you know how to harness it.” — Boundless Necromancer",
        // Genius Archer’s Streaming
        "“The world’s watching, so I’ll show them a perfect shot.” — Genius Archer’s Streaming",
        // Helmut: The Forsaken Child
        "“I was cast aside, but I’ll rise stronger than anyone.” — Helmut: The Forsaken Child",
        // I’m the Max-Level Newbie
        "“When you’ve reached the top, the only way is to break all limits.” — I’m the Max-Level Newbie",
        // Insanely Talented Player
        "“Talent is nothing without grit—and I have both.” — Insanely Talented Player",
        // Omniscient Reader’s Viewpoint
        "“I know the story’s paths, but I’ll forge my own ending.” — Omniscient Reader’s Viewpoint",
        // Reincarnated Escort Warrior
        "“I vowed to protect, and reincarnation won’t change that duty.” — Reincarnated Escort Warrior",
        // Return of the Frozen Player
        "“Time stopped for me, but I’ll conquer this new era.” — Return of the Frozen Player",
        // Return of the Mount Hua Sect
        "“Mount Hua’s sword never dulls; our spirit only gets sharper.” — Return of the Mount Hua Sect",
        // SSS-Class Suicide Hunter
        "“Dying isn’t the end—sometimes it’s just a fresh beginning.” — SSS-Class Suicide Hunter",
        // Swordmaster Youngest Son
        "“Being the youngest means I’ll carve my own legend from scratch.” — Swordmaster Youngest Son"
    ];

    const randomQuote = manhwaQuotes[Math.floor(Math.random() * manhwaQuotes.length)];
    const quoteEl = document.querySelector(".quote");
    const authorEl = document.querySelector(".author");

    if (quoteEl && authorEl) {
        const [quote, author] = randomQuote.split(" — ");
        quoteEl.textContent = quote;
        authorEl.textContent = `— ${author}`;
    }
}




