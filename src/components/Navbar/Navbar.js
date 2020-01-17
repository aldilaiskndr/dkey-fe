import React from "react";
import classnames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css'
// reactstrap components
import {
    Button,
    Collapse,
    Navbar,
    Nav,
    Container
} from "reactstrap";
import {Link} from "react-router-dom";

function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 99 ||
                document.body.scrollTop > 99
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 100 ||
                document.body.scrollTop < 100
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container>
                <div className="navbar-translate">
                    <Link to="/" style={{textDecoration:'none', color:'white'}} title="Digital Key Indonesia">
                        <h2 style={{marginBottom:'20px'}}>
                            DKey
                        </h2>
                    </Link>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1"/>
                    </button>
                </div>
                 <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                    style={{marginTop:'10px'}}
                >
                    <Nav navbar style={{marginTop: '-15px'}}>
                        <form action="../search" className="form-group" method="GET">
                            <div className="input-group">
                                <input type="text" placeholder="Search" className="form-control"
                                       style={{padding: '22px', width: '300px', marginTop: '17px'}} name="keyword"/>
                                <Button
                                    className="btn btn-outline-warning"
                                    outline={true}
                                    style={{paddingTop: '17px'}}
                                >
                                    <h5 color="white"
                                        style={{alignItems: 'center', marginTop: '-9px', paddingBottom: '5px'}}><i
                                        className="fa fa-search"/></h5>
                                </Button>
                            </div>
                        </form>
                        <Link to="/login">
                            <Button
                                className="btn btn-outline-warning"
                                outline={true}
                                style={{paddingTop: '13px'}}
                            >
                                <h5><b>Sign In</b></h5>
                            </Button>
                        </Link>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default IndexNavbar;
