import * as React from 'react';
// import { Link } from "react-router-dom";
interface IProps {
}
interface IState {
}

class Home extends React.Component<IProps, IState> {


    public componentDidMount() {

    }

    public render(): React.ReactNode {
        return (
            <div>
                <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src="https://d1fdloi71mui9q.cloudfront.net/VIPOah24R0Ci53xKqnUz_RA3ZMAKV506Pfhn3" alt="" width="72"/>
                        <h1 className="display-5 fw-bold">Hafiyan Rizqi Sanjaya</h1>
                        <div className="col-lg-6 mx-auto">
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <a type="button" className="btn btn-primary btn-lg px-4 gap-3"
                                 href="https://linktr.ee/hafiyanrizqisanjaya">My Profile</a>
                            </div>
                        </div>
                </div>

            </div>
        );
    }
}
export default Home;