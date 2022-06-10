export default function ingresar() {
  return (
    <div className="vh-100 row justify-content-center align-items-center">
      <div className="col-auto text-dark">
        <h1 className="text-center pb-3">Ingresar</h1>
        <form>
          <div className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label">Email</label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
            <label className="form-label">Password</label>
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label className="form-check-label">Remember me</label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          <div className="col-auto justify-content-center align-content-center align-items-center">
            <button type="button" className="btn btn-dark text-center  ">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
