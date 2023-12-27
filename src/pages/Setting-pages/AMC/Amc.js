import React, { useState } from "react";
import "./Amc.css";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from '@mui/material';
import Button from "@mui/material/Button";

const calltype = [];

const Amc = () => {

    const calltypeDefaultProps = {
        options: calltype,
        getOptionLabel: (option) => option.title,
    };

    const [value, setValue] = useState({
        ContactNumber: "",
    });

    return (
        <>
            <div className="firstbox-Amc">
                <h4 className="first-text-Amc">AMC</h4>
            </div>

            <div className="firsttextbox-amc">
                <div className="line-Amc">
                    <div className="textinput-Amc">
                        <TextField
                            id="standard-basic"
                            label="AMC Name"
                            variant="standard"
                            onChange={(e, val) => {
                                setValue({ ...value, ContactNumber: e.target.value });
                            }}
                        />
                    </div>

                    <div className="textinput-Amc">

                        <Autocomplete
                            onChange={(e, val) => {
                                setValue({ ...value, role: val.title });
                            }}
                            {...calltypeDefaultProps}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="
      Brand"
                                    variant="standard"
                                />
                            )}
                        />

                    </div>
                    <div className="textinput-Amc">

                        <Autocomplete
                            onChange={(e, val) => {
                                setValue({ ...value, role: val.title });
                            }}
                            {...calltypeDefaultProps}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="
      Product Category"
                                    variant="standard"
                                />
                            )}
                        />

                    </div>
                    <div className="textinput-Amc">

                        <Autocomplete
                            onChange={(e, val) => {
                                setValue({ ...value, role: val.title });
                            }}
                            {...calltypeDefaultProps}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="
      Sub Category"
                                    variant="standard"
                                />
                            )}
                        />

                    </div>
                </div>

                <div className="line-Amc">

                    <div className="textinput-Amc">

                        <Autocomplete
                            onChange={(e, val) => {
                                setValue({ ...value, role: val.title });
                            }}
                            {...calltypeDefaultProps}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="
      Model"
                                    variant="standard"
                                />
                            )}
                        />

                    </div>
                    <div className="textinput-Amc">

                        <Autocomplete
                            onChange={(e, val) => {
                                setValue({ ...value, role: val.title });
                            }}
                            {...calltypeDefaultProps}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="
      SKU"
                                    variant="standard"
                                />
                            )}
                        />

                    </div>

                    <div textinput-Amc></div>
                    <div textinput-Amc></div>
                </div>

                <div className="buttons-Amc">
                    <span className="buttons-Amc-span">
                        <Button
                            className="action-button"
                            size="large"
                            component="label"
                            variant="contained"
                        >
                            Creates
                        </Button>
                    </span>


                </div>
            </div>


            <div className="Secoundtextbox-amc">
                <div className="line-Amc">
                    <div className="textinput-Amc">
                        <TextField
                            id="standard-basic"
                            label="AMC Name"
                            variant="standard"
                            onChange={(e, val) => {
                                setValue({ ...value, ContactNumber: e.target.value });
                            }}
                        />
                    </div>

                    <div className="textinput-Amc">

                        <Autocomplete
                            onChange={(e, val) => {
                                setValue({ ...value, role: val.title });
                            }}
                            {...calltypeDefaultProps}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="
      Brand"
                                    variant="standard"
                                />
                            )}
                        />

                    </div>
                    <div className="textinput-Amc">

                        <Autocomplete
                            onChange={(e, val) => {
                                setValue({ ...value, role: val.title });
                            }}
                            {...calltypeDefaultProps}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="
      Product Category"
                                    variant="standard"
                                />
                            )}
                        />

                    </div>
                    <div className="textinput-Amc">

                        <Autocomplete
                            onChange={(e, val) => {
                                setValue({ ...value, role: val.title });
                            }}
                            {...calltypeDefaultProps}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="
      Sub Category"
                                    variant="standard"
                                />
                            )}
                        />

                    </div>
                </div>

                <div className="line-Amc">

                </div>

                <div className="buttons-Amc">
                    <span className="buttons-Amc-span">
                        <Button
                            className="action-button"
                            size="large"
                            component="label"
                            variant="contained"
                        >
                            Search
                        </Button>
                    </span>


                </div>
            </div>

            <div className="table-Amc">
                <table>
                    <thead>
                        <tr>
                            <th>AMC Name</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Model</th>
                            <th>SKU</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                        <tr>
                            <td colspan="8">&nbsp;</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                        </tr>
                        <tr>
                            <td colspan="8">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                            <td>xxxxxx</td>
                        </tr>

                    </tbody>
                </table>
            </div>





        </>
    );
};

export default Amc;
