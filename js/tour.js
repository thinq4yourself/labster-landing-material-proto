// Start the tour
// 

var tour = new Tour({
  name: "tour",
  container: "body",
  keyboard: true,
  storage: window.localStorage,
  debug: false,
  backdrop: false,
  backdropPadding: 0,
  redirect: true,
  orphan: false,
  duration: false,
  delay: false,
  basePath: "",
  template: "<div class='popover tour'>
    <div class='arrow'></div>
    <h3 class='popover-title'></h3>
    <div class='popover-content'></div>
    <div class='popover-navigation'>
        <button class='btn btn-default' data-role='prev'>« Prev</button>
        <span data-role='separator'>|</span>
        <button class='btn btn-default' data-role='next'>Next »</button>
    </div>
    <button class='btn btn-default' data-role='end'>End tour</button>
    </nav>
  </div>",
  afterGetState: function (key, value) {},
  afterSetState: function (key, value) {},
  afterRemoveState: function (key, value) {},
  onStart: function (tour) {},
  onEnd: function (tour) {},
  onShow: function (tour) {},
  onShown: function (tour) {},
  onHide: function (tour) {},
  onHidden: function (tour) {},
  onNext: function (tour) {},
  onPrev: function (tour) {},
  onPause: function (tour, duration) {},
  onResume: function (tour, duration) {},
  steps: [
  {
    element: "#tour-1",
    title: "Title of this step",
    content: "Content of this step"
  },
  {
    element: "#tour-2",
    title: "Title of this step",
    content: "Content of this step"
  },
  {
    element: "#tour-3",
    title: "Title of this step",
    content: "Content of this step"
  },
  {
    element: "#tour-4",
    title: "Title of this step",
    content: "Content of this step"
  },
  {
    element: "#tour-5",
    title: "Title of this step",
    content: "Content of this step"
  },
  {
    element: "#tour-6",
    title: "Title of this step",
    content: "Content of this step"
  },
  {
    element: "#tour-7",
    title: "Title of this step",
    content: "Content of this step"
  },
  {
    element: "#tour-8",
    title: "Title of this step",
    content: "Content of this step"
  },
  {
    element: "#tour-9",
    title: "Title of this step",
    content: "Content of this step"
  },
  {
    element: "#tour-10",
    title: "Title of this step",
    content: "Content of this step"
  }
]}
});


// Initialize the tour
tour.init();

// Start the tour
tour.start();