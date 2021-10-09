import React from 'react';
import './PackageCloud.css';

// icon
import ceklis from '../assets/icon/ceklis.png';
import dot from '../assets/icon/dot.png';
function PackageCloude() {
    return (
        <div className="packages">
            <h2 className='title-pkg'>Ready to get started with <br />
                Lemon Wares
            </h2>
            <h2>asdasd </h2>
            <p className='sub-title-pkg'>Choose the packages that suit you</p>
            <ul className='time-pkgs'>
                <li className='time-pkg'>
                    <p className='sub-title'>Monthly</p>
                </li>
                <li className='time-pkg'>
                    <div className='area-button'>
                        <img src={dot} className='dot' />
                    </div>
                </li>
                <li className='time-pkg'>
                    <p className='sub-title'>Yearly</p>
                </li>
                <li className='time-pkg'>
                    <p className='sub-title'>Discount</p>
                </li>
            </ul>
            <div className='nav-pkgs'>
                <div className='nav-pkg active'>
                    <p className='nav-pkg-title'>
                        Basic
                    </p>
                </div>
                <div className='nav-pkg nonActive'>
                    <p className='nav-pkg-title'>
                        Premium
                    </p>
                </div>
            </div>

            <div className='row row-prices'>
                <div className='col-4 col-card'>
                    <div className='card-pkg'>
                        <h4 className='title-pkg-card'>Starter</h4>
                        <p className='desc-prices'>with all your customers via all conversation channels in one central dashboard.</p>
                        <p className='price-pkg'> $2.80 </p>
                        <p className='price-desc-time'> Per month </p>
                        <button className='btn-outline-price'>Chose this Plan</button>
                        <p className='list-pkg'><i class="fas fa-check"></i>2GB SSD</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>10GB Bandwith</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>10GB Bandwith</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>15 Eamil Accounts</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>Unlimited Database</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>4 Subdomains</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>1 Parked Domain</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>2 Websites</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>Free SSL</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>softaculous</p>
                    </div>
                </div>
                <div className='col-4 col-card'>
                    <div className='card-pkg'>
                        <h4 className='title-pkg-card'>Starter</h4>
                        <p className='desc-prices'>with all your customers via all conversation channels in one central dashboard.</p>
                        <p className='price-pkg'> $2.80 </p>
                        <p className='price-desc-time'> Per month </p>
                        <button className='btn-outline-price'>Chose this Plan</button>
                        <p className='list-pkg'><i class="fas fa-check"></i>2GB SSD</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>10GB Bandwith</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>10GB Bandwith</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>15 Eamil Accounts</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>Unlimited Database</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>4 Subdomains</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>1 Parked Domain</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>2 Websites</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>Free SSL</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>softaculous</p>
                    </div>
                </div>
                <div className='col-4 col-card'>
                    <div className='card-pkg'>
                        <h4 className='title-pkg-card'>Starter</h4>
                        <p className='desc-prices'>with all your customers via all conversation channels in one central dashboard.</p>
                        <p className='price-pkg'> $2.80 </p>
                        <p className='price-desc-time'> Per month </p>
                        <button className='btn-outline-price'>Chose this Plan</button>
                        <p className='list-pkg'><i class="fas fa-check"></i>2GB SSD</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>10GB Bandwith</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>10GB Bandwith</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>15 Eamil Accounts</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>Unlimited Database</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>4 Subdomains</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>1 Parked Domain</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>2 Websites</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>Free SSL</p>
                        <p className='list-pkg'><i class="fas fa-check"></i>softaculous</p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default PackageCloude;