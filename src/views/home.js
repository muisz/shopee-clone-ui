import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts';
import { FaHome, FaCameraRetro, FaBell, FaUserAlt, FaLayerGroup, FaShoppingCart, FaRocketchat, FaCamera, FaWallet, FaCoins,FaAngleRight } from 'react-icons/fa';
import { Row, Col, Form } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    name: 'Bangga Buatan Indonesia',
                    img: '/images/kategori-6.png',
                    path: '#'
                },
                {
                    name: 'Elektronik 50:50',
                    img: '/images/kategori-5.png',
                    path: '#'
                },
                {
                    name: 'Pulsa, Tagihan & Hiburan',
                    img: '/images/kategori-4.png',
                    path: '#'
                },
                {
                    name: 'inFashion',
                    img: '/images/kategori-3.png',
                    path: '#'
                },
                {
                    name: 'Mart',
                    img: '/images/kategori-2.png',
                    path: '#'
                },
                {
                    name: 'Bayar Di Tempat',
                    img: '/images/kategori-1.png',
                    path: '#'
                }
            ]
        };
    }

    renderBottom(){
        return(
            <div className="bottom-nav-item">
                <div>
                    <Link to="#" className="link link-active">
                        <div>
                            <FaHome />
                        </div>
                        <div className="bottom-nav-item-txt">Home</div>
                    </Link>
                </div>
                <div>
                    <Link to="#" className="link">
                        <div>
                            <FaLayerGroup />
                        </div>
                        <div className="bottom-nav-item-txt">Feed</div>
                    </Link>
                </div>
                <div>
                    <Link to="#" className="link">
                        <div>
                            <FaCameraRetro />
                        </div>
                        <div className="bottom-nav-item-txt">Live</div>
                    </Link>
                </div>
                <div>
                    <Link to="#" className="link">
                        <div>
                            <FaBell />
                        </div>
                        <div className="bottom-nav-item-txt">Notifikasi</div>
                    </Link>
                </div>
                <div>
                    <Link to="#" className="link">
                        <div>
                            <FaUserAlt />
                        </div>
                        <div className="bottom-nav-item-txt">Saya</div>
                    </Link>
                </div>
            </div>
        );
    }

    render() { 
        return (
            <MainLayout
                withBottomNav={true}
                bottomNav={this.renderBottom()}
            >
                <div className="home-top-page">
                    <div className="grid-top-page" style={{padding: '5px'}}>
                        <div>
                            <Form.Control type="text" placeholder="Search" />
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <Link to="#">
                                <FaShoppingCart color="#fff" />
                            </Link>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <Link to="#">
                                <FaRocketchat color="#fff" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{background: '#fff'}}>
                    <div className="balance-container">
                        <div style={{textAlign: 'center'}}>
                            <Link to="#" className="link"><FaCamera size={24} /></Link>
                        </div>
                        <div style={{borderLeft: '1px solid #e8e8e8', paddingLeft: '5px', lineHeight: '17px'}}>
                            <Link to="#" className="link">
                                <div>
                                    <span style={{marginRight: '8px'}}><FaWallet /></span>
                                    <span style={{fontSize: '12px', fontWeight: 700}}>Rp5.000.000</span><br/>
                                </div>
                                <span style={{fontSize: '11px', color: 'gray'}}>Isi saldo Pay</span>
                            </Link>
                        </div>
                        <div style={{borderLeft: '1px solid #e8e8e8', paddingLeft: '5px', lineHeight: '17px'}}>
                            <Link to="#" className="link">
                                <div>
                                    <span style={{marginRight: '8px'}}><FaCoins /></span>
                                    <span style={{fontSize: '12px', fontWeight: 700}}>500 Koin</span><br/>
                                </div>
                                <span style={{fontSize: '11px', color: 'gray'}}>Reward Koin</span>
                            </Link>
                        </div>
                    </div>
                    <div className="home-category">
                        <ul>
                            <li>
                                <Link to="#">
                                    <div className="category-item">
                                        <div className="category-icon">
                                            <img src="/images/kategori-1.png" />
                                        </div>
                                        <div className="category-name">Bayar Di Tempat</div>
                                    </div>
                                </Link>
                            </li>
                            {this.state.categories.map((category, key) => {
                                return(
                                    <li key={key}>
                                        <Link to={category.path}>
                                            <div className="category-item">
                                                <div className="category-icon">
                                                    <img src={category.img} />
                                                </div>
                                                <div className="category-name">{category.name}</div>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="kategori-container">
                    <Row>
                        <Col>
                            <h6 className="primary">Kategori</h6>
                        </Col>
                        <Col style={{textAlign: 'right'}}>
                            <Link to="#">Lihat lainnya <span><FaAngleRight /></span></Link>
                        </Col>
                    </Row>
                </div>
            </MainLayout>
        );
    }
}
 
export default Home;