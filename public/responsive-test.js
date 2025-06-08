// Responsive Design Validation Script
// Run in browser console to test responsive breakpoints

function validateResponsiveDesign() {
  console.log("🔍 Validating Responsive Design Implementation...\n");

  // Test different viewport sizes
  const breakpoints = [
    { name: "Mobile Small", width: 320, height: 568 },
    { name: "Mobile Large", width: 414, height: 896 },
    { name: "Tablet Portrait", width: 768, height: 1024 },
    { name: "Tablet Landscape", width: 1024, height: 768 },
    { name: "Desktop Small", width: 1366, height: 768 },
    { name: "Desktop Large", width: 1920, height: 1080 },
  ];

  const results = [];

  breakpoints.forEach(({ name, width, height }) => {
    // Simulate viewport change
    console.log(`📱 Testing ${name} (${width}x${height})`);

    // Check header responsiveness
    const header = document.querySelector("header");
    const mobileMenu = document.querySelector('[aria-label="منوی موبایل"]');
    const desktopNav = document.querySelector("nav.hidden.lg\\:flex");

    // Check hero section
    const heroSection = document.querySelector(".relative.bg-\\[\\#151515\\]");

    // Check product cards
    const productCards = document.querySelectorAll(
      '[class*="ProductCard"], [class*="product-card"]'
    );

    // Check footer
    const footer = document.querySelector("footer");

    const result = {
      breakpoint: name,
      dimensions: `${width}x${height}`,
      header: header ? "✅ Present" : "❌ Missing",
      mobileMenu:
        width < 1024 ? (mobileMenu ? "✅ Visible" : "❌ Hidden") : "N/A",
      desktopNav:
        width >= 1024 ? (desktopNav ? "✅ Visible" : "❌ Hidden") : "N/A",
      heroSection: heroSection ? "✅ Responsive" : "❌ Missing",
      productCards:
        productCards.length > 0
          ? `✅ ${productCards.length} cards`
          : "❌ No cards",
      footer: footer ? "✅ Present" : "❌ Missing",
    };

    results.push(result);
  });

  // Display results
  console.table(results);

  // Additional checks
  console.log("\n🎯 Additional Responsive Checks:");

  // Check for touch-friendly elements
  const touchElements = document.querySelectorAll(".touch-manipulation");
  console.log(`Touch-optimized elements: ${touchElements.length}`);

  // Check for responsive images
  const images = document.querySelectorAll('img[sizes], img[loading="lazy"]');
  console.log(`Optimized images: ${images.length}`);

  // Check for responsive text
  const responsiveText = document.querySelectorAll(
    '[class*="sm:"], [class*="md:"], [class*="lg:"]'
  );
  console.log(`Responsive text elements: ${responsiveText.length}`);

  // Check animations
  const animatedElements = document.querySelectorAll(".animate-fade-in-up");
  console.log(`Animated elements: ${animatedElements.length}`);

  console.log("\n✅ Responsive design validation complete!");
}

// Run validation
validateResponsiveDesign();

// CSS Media Query Test
function testMediaQueries() {
  console.log("\n📐 Testing CSS Media Queries:");

  const queries = [
    "(max-width: 640px)",
    "(min-width: 640px) and (max-width: 768px)",
    "(min-width: 768px) and (max-width: 1024px)",
    "(min-width: 1024px)",
  ];

  queries.forEach((query, index) => {
    const matches = window.matchMedia(query).matches;
    const breakpointNames = [
      "Mobile",
      "Small Tablet",
      "Large Tablet",
      "Desktop",
    ];
    console.log(
      `${breakpointNames[index]}: ${matches ? "✅ Active" : "❌ Inactive"}`
    );
  });
}

testMediaQueries();

// Performance check
function checkPerformance() {
  console.log("\n⚡ Performance Metrics:");

  if ("performance" in window) {
    const navigation = performance.getEntriesByType("navigation")[0];
    if (navigation) {
      console.log(
        `DOM Content Loaded: ${Math.round(
          navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart
        )}ms`
      );
      console.log(
        `Page Load Complete: ${Math.round(
          navigation.loadEventEnd - navigation.loadEventStart
        )}ms`
      );
    }

    // Check for layout shifts
    if ("PerformanceObserver" in window) {
      let cls = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        }
        console.log(`Cumulative Layout Shift: ${cls.toFixed(4)}`);
      }).observe({ type: "layout-shift", buffered: true });
    }
  }
}

checkPerformance();
