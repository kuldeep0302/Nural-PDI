import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/app";
import Setting from "./Componants/Setting/Setting";
import Managecountrymain from "./pages/Setting-pages/Manage-country/Managecountrymain";
import Managecountry from "./pages/Setting-pages/Manage-country/Manage-country";
import Manageregionmain from "./pages/Setting-pages/Manage-region/Manageregionmain";
import Manageregion from "./pages/Setting-pages/Manage-region/Manage-region";
import Managezonemain from "./pages/Setting-pages/Manage-zone/Managezonemain";
import Managezone from "./pages/Setting-pages/Manage-zone/Mainegezone";
import Managestatemain from "./pages/Setting-pages/Manage-state/Managestatemain";
import Managestate from "../src/pages/Setting-pages/Manage-state/Managestate";
import Managedistrictmain from "../src/pages/Setting-pages/Manage-District/Managedistrictmain";
import Managedistrict from "./pages/Setting-pages/Manage-District/Managedistrict";
import Managecitymain from "./pages/Setting-pages/Manage-city/Managecitymain";
import Managecity from "./pages/Setting-pages/Manage-city/Managecity";
import Managelocalitymain from "./pages/Setting-pages/Manage-Locality/Managelocalitymain";
import Managelocality from "./pages/Setting-pages/Manage-Locality/Managelocality";
import Bulkuploadlocality from "./pages/Setting-pages/Bulkupload-locality/Bulkuploadlocality";
import Managetexmastermain from "./pages/Setting-pages/Manage-Tax-Master/Managetexmastermain";
import Managetexmaster from "./pages/Setting-pages/Manage-Tax-Master/Managetexmaster";
import TaxCategoryNamemain from "./pages/Setting-pages/Tax-Category-Name/TaxCategoryNamemain";
import TaxCategoryName from "./pages/Setting-pages/Tax-Category-Name/TaxCategoryName";
import Manageproductmain from "./pages/Setting-pages/Manage-product/Manageproductmain";
import Manageproduct from "./pages/Setting-pages/Manage-product/Manageproduct";
import Managebrandmain from "./pages/Setting-pages/Manage-Brand/Managebrandmain";
import Managebrand from "./pages/Setting-pages/Manage-Brand/Managebrand";
import Manageproductcatgeorymain from "./pages/Setting-pages/Manage-Product-Catgeory/Manageproductcatgeorymain";
import Manageproductcatgeory from "./pages/Setting-pages/Manage-Product-Catgeory/Manageproductcatgeory";
import Managemodelmainmain from "./pages/Setting-pages/Manage-Model/Managemodelmain";
import Managemodel from "./pages/Setting-pages/Manage-Model/Managemodel";
import Manageskumain from "./pages/Setting-pages/Manage-SKU/Manageskumain";
import Managesku from "./pages/Setting-pages/Manage-SKU/Managesku";
import Managepartmaster from "./pages/Setting-pages/Manage-part-master/Managepartmaster";
import Manageproductsparespecificationmain from "./pages/Setting-pages/Manage-ProductSpare-Specification/Manageproductsparespecificationmain";
import Manageproductsparespecification from "./pages/Setting-pages/Manage-ProductSpare-Specification/Manageproductsparespecification";
import Serialvendorwarranty from "./pages/Setting-pages/Serial-Vendor-Warranty/Serialvendorwarranty";
import Customercategorymain from "./pages/Setting-pages/Customer-Category/Customercategorymain";
import Customercategory from "./pages/Setting-pages/Customer-Category/Customercategory";
import Viewentitymapping from "./pages/Setting-pages/View-Entity-Mapping/Viewentitymapping";
import Manageentitycreditterm from "./pages/Setting-pages/Manage-Entity-Credit-Term/Manageentitycreditterm";
import Manageentitycredittermmain from "./pages/Setting-pages/Manage-Entity-Credit-Term/Manageentitycredittermmain";
import Uploadmanageuser from "./pages/Setting-pages/Upload-Manage-User/Uploadmanageuser";
import Uploadentitydetail from "./pages/Setting-pages/Upload-Entity-Detail/Uploadentitydetail";
import Manageholiday from "./pages/Setting-pages/Manage Holiday/Manageholiday";
import Manageholidaymain from "./pages/Setting-pages/Manage Holiday/Manageholidaymain";
import Usermaster from "./pages/Setting-pages/User-master/Usermaster";
import Entitymappingmain from "./pages/Setting-pages/Entity-Mapping/Entitymappingmain";
import Entitymapping from "./pages/Setting-pages/Entity-Mapping/Entitymapping";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Setting" element={<Setting />} />
      <Route path="/Managecountrymain" element={<Managecountrymain />} />
      <Route path="/Managecountry" element={<Managecountry />} />
      <Route path="/Manageregionmain" element={<Manageregionmain />} />
      <Route path="/Manageregion" element={<Manageregion />} />
      <Route path="/Managezonemain" element={<Managezonemain />} />
      <Route path="/Managezone" element={<Managezone />} />
      <Route path="/Managestatemain" element={<Managestatemain />} />
      <Route path="/Managestate" element={<Managestate />} />
      <Route path="/Managedistrictmain" element={<Managedistrictmain />} />
      <Route path="/Managedistrict" element={<Managedistrict />} />
      <Route path="/Managecitymain" element={<Managecitymain />} />
      <Route path="/Managecity" element={<Managecity />} />
      <Route path="/Managelocalitymain" element={<Managelocalitymain />} />
      <Route path="/Managelocality" element={<Managelocality />} />
      <Route path="/Bulk-uploadlocality" element={<Bulkuploadlocality />} />
      <Route path="/Managetexmastermain" element={<Managetexmastermain />} />
      <Route path="/Managetexmaster" element={<Managetexmaster />} />
      <Route path="/TaxCategoryNamemain" element={<TaxCategoryNamemain />} />
      <Route path="/TaxCategoryName" element={<TaxCategoryName />} />
      <Route path="/Manageproductmain" element={<Manageproductmain />} />
      <Route path="/Manageproduct" element={<Manageproduct />} />
      <Route path="/Managebrandmain" element={<Managebrandmain />} />
      <Route path="/Managebrand" element={<Managebrand />} />
      <Route
        path="/Manageproductcatgeorymain"
        element={<Manageproductcatgeorymain />}
      />
      <Route
        path="/Manageproductcatgeory"
        element={<Manageproductcatgeory />}
      />
      <Route path="/Managemodelmain" element={<Managemodelmainmain />} />
      <Route path="/Managemodel" element={<Managemodel />} />
      <Route path="/Manageskumain" element={<Manageskumain />} />
      <Route path="/Managesku" element={<Managesku />} />
      <Route path="/Managepartmaster" element={<Managepartmaster />} />
      <Route
        path="/Manageproductsparespecificationmain"
        element={<Manageproductsparespecificationmain />}
      />
      <Route
        path="/Manageproductsparespecification"
        element={<Manageproductsparespecification />}
      />
      <Route path="/Serialvendorwarranty" element={<Serialvendorwarranty />} />
      <Route path="/Customercategory" element={<Customercategory />} />
      <Route path="/Customercategorymain" element={<Customercategorymain />} />
      <Route path="/Viewentitymapping" element={<Viewentitymapping />} />
      <Route
        path="/Manageentitycreditterm"
        element={<Manageentitycreditterm />}
      />
      <Route
        path="/Manageentitycredittermmain"
        element={<Manageentitycredittermmain />}
      />
      <Route path="/Uploadmanageuser" element={<Uploadmanageuser />} />
      <Route path="/Uploadentitydetail" element={<Uploadentitydetail />} />
      <Route path="/Manageholiday" element={<Manageholiday />} />
      <Route path="/Manageholidaymain" element={<Manageholidaymain />} />
      <Route path="/Usermaster" element={<Usermaster />} />
      <Route path="/Entitymappingmain" element={<Entitymappingmain />} />
      <Route path="/Entitymapping" element={<Entitymapping />} />
    </Routes>
  );
}
export default RoutesApp;
