import React from "react";
import "./Setiting.css";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <div className="setting-containermain">
      <header className="container-setting"></header>
      <div>
        <p className="MASTERS">MANAGE LOCATION</p>
        <Link to="/Managecountrymain">
          <button className="Positions" type="button">
            Manage Country
          </button>
        </Link>

        <Link to="/Managezonemain">
          <button className="Positions" type="button">
            Manage Zone
          </button>
        </Link>

        <Link to="/Manageregionmain">
          <button className="Positions" type="button">
            Manage Region
          </button>
        </Link>
        <Link to="/Managestatemain">
          <button className="Positions" type="button">
            Manage State
          </button>
        </Link>
        <Link to="/Managedistrictmain">
          <button className="Positions" type="button">
            Manage District
          </button>
        </Link>

        <Link to="/Managecitymain">
          <button className="Positions" type="button">
            Manage City
          </button>
        </Link>

        <Link to="/Managelocalitymain">
          <button className="Positions" type="button">
            Manage Locality
          </button>
        </Link>
        <Link to="/bulk-uploadlocality">
          <button className="Positions" type="button">
            Bulk Upload Locality
          </button>
        </Link>
      </div>

      <div>
        <p className="MASTERS">MANAGE TAX MASTER</p>

        <Link to="/Managetexmastermain">
          <button className="Positions" type="button">
            Manage Tax Master
          </button>
        </Link>

        <Link to="/TaxCategoryNamemain">
          <button className="Positions" type="button">
            Manage Tax Category
          </button>
        </Link>
      </div>

      <div>
        <p className="MASTERS">MANAGE PRODUCT BASE</p>
        <Link to="/Managebrandmain">
          <button className="Positions" type="button">
            Manage Brand
          </button>
        </Link>
        <Link to="/Manageproductcatgeorymain">
          <button className="Positions" type="button">
            Manage Product Category
          </button>
        </Link>
        <Link to="/Managemodelmain">
          <button className="Positions" type="button">
            Manage Model
          </button>
        </Link>

        <Link to="/Manageskumain">
          <button className="Positions" type="button">
            Manage SKU
          </button>
        </Link>
      </div>
      <div>
        <p className="MASTERS">MANAGE PRODUCT/SPARES</p>
        <Link to="/Manageproductmain">
          <button className="Positions" type="button">
            Manage Product
          </button>
        </Link>

        <Link to="/Managepartmaster">
          <button className="Positions" type="button">
            Manage Part Master
          </button>
        </Link>

        <Link to="/Manageproductsparespecificationmain">
          <button className="Positions" type="button">
            Manage Product/Spare Specification
          </button>
        </Link>

        <Link to="/Serialvendorwarranty">
          <button className="Positions" type="button">
            Serial Vendor Warranty
          </button>
        </Link>

        <Link to="/Customercategorymain">
          <button className="Positions" type="button">
            Customer Category
          </button>
        </Link>
      </div>

      <div>
        <p className="MASTERS">MANAGE USER BASE</p>

        <Link to="/Usermaster">
          <button className="Positions" type="button">
            User-Master
          </button>
        </Link>

        <Link to="/Entitymappingmain">
          <button className="Positions" type="button">
            Entity Mapping
          </button>
        </Link>
      </div>

      <div>
        <p className="MASTERS">AMC</p>
        <Link to="/Amc">
          <button className="Positions" type="button">
            AMC
          </button>
        </Link>
      </div>


      <div>
        <p className="MASTERS">Manage HOLIDAYS</p>
        <Link to="/Manageholidaymain">
          <button className="Positions" type="button">
            Manage Holiday
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Setting;
