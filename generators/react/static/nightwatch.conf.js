require("babel-register");

module.exports = {
  src_folders: ["tests"],
  output_folder: "reports",

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
      desiredCapabilities: {
        browserName: "firefox",
        marionette: true
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome"
      }
    },

    edge: {
      desiredCapabilities: {
        browserName: "MicrosoftEdge"
      }
    }
  }
};
