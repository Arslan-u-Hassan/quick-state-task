import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("fknvfinvikfnvklfdnvlnfv jdfnvfdvn")
    this.uploadProgress()
  }

  uploadProgress() {
    const progressBar = document.getElementById('progress-bar')
    console.log("In uploadProgress Start");

    document.addEventListener("direct-upload:initialize", event => {
      console.log("In uploadProgress initialize");

      const { target } = event.detail
      target.upload = new DirectUpload(target, target.dataset.directUploadUrl, this)
    })

    document.addEventListener("direct-upload:start", event => {
      console.log("In uploadProgress start");

      progressBar.style.width = "100%"
    })

    document.addEventListener("direct-upload:progress", event => {
      console.log("In uploadProgress error");

      const { progress } = event.detail
      progressBar.style.width = `${progress}%`
    })

    document.addEventListener("direct-upload:error", event => {
      console.log("In uploadProgress error");

      progressBar.style.backgroundColor = "red"
    })

    document.addEventListener("direct-upload:end", event => {
      console.log("In uploadProgress end");

      progressBar.style.backgroundColor = "blue"
    })
  }
}
