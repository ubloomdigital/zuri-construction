import Macy from "macy";

const component = document.querySelector("[data-component='project-gallery']");

if (component) {
  const container = component.querySelector(".w-dyn-items");

  const macy = Macy({
    container: container,
    margin: 16,
    columns: 3,
    breakAt: {
      991: { columns: 2 },
      767: { margin: 8 },
    },
  });

  // Keep Macy tidy as images load (no animations).
  macy.runOnImageLoad(() => {
    macy.recalculate(true);
  }, true);
}
