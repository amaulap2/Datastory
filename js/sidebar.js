document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const titles = document.querySelectorAll("h1");
  
    sidebar.innerHTML = '';  // Clear existing content
  
    titles.forEach(title => {
      const link = document.createElement("a");
      link.href = `#${title.id}`;
      link.textContent = title.textContent;
      sidebar.appendChild(link);
    });
  });


// All method

/*
document.addEventListener("DOMContentLoaded", function () {
  // Get all headings (h2, h3, h4, etc.) from the content area
  const contentHeadings = document.querySelectorAll(".content h1"); // .content h2, .content h3, .content h4");
  console.log(contentHeadings);
  // Get the sidebar summary element
  const summary = document.getElementById("summary");

  // Create a list to hold the TOC items
  const tocList = document.createElement("ul");

  let currentH2 = null; // Variable to track the last <h2> heading

  contentHeadings.forEach((heading, index) => {

      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;

      listItem.appendChild(link);

      if (heading.tagName === "H1") {
        // Handle h1 separately (top-level item in the TOC)
        tocList.appendChild(listItem);
    } else if (heading.tagName === "H2") {
        // Handle h2
        tocList.appendChild(listItem);
        currentH2 = listItem;
    } else if (heading.tagName === "H3" || heading.tagName === "H4") {
        // Handle h3, h4 as sub-items of h2
        if (currentH2) {
            let subList = currentH2.querySelector("ul");
            if (!subList) {
                subList = document.createElement("ul");
                currentH2.appendChild(subList);
            }
            subList.appendChild(listItem);
        }
    }
    
  });

  // Append the TOC list to the sidebar
  summary.appendChild(tocList);
});
*/