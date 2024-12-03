import React from 'react'

function Modal() {
  return (
    <>
        
<div class="modal fade" id="staticBackdrop4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
    <div class="modal-dialog d-flex justify-content-center">
        <div class="modal-content w-75">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel4">Termék módosítása</h5>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4">
                <form>
                    {/* <!-- Title input --> */}
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="text" id="name4" class="form-control" placeholder=''/>
                        <label class="form-label" for="name4">Name</label>
                    </div>

                    {/* <!-- Price input --> */}
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="email" id="email4" class="form-control" placeholder=''/>
                        <label class="form-label" for="email4">Email address</label>
                    </div>

                    {/* <!-- Description input --> */}
                    <div data-mdb-input-init class="form-outline mb-4">
                        <textarea id="textarea4" rows="4" class="form-control" placeholder=''></textarea>
                        <label class="form-label" for="textarea4">Your message</label>
                    </div>
                     {/* Category input */}
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="text" id="name4" class="form-control" placeholder=''/>
                        <label class="form-label" for="name4">Name</label>
                    </div>


                    {/* <!-- Submit button --> */}
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block">Send</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Modal