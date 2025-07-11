import { Backdrop, Box, Button, Divider, Fade, FormControl, FormControlLabel, IconButton, InputAdornment, Modal, Radio, RadioGroup, Slide, styled, Switch, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CustomTextfield, DebitCardBox, ModalInnerBox, PaymentButton, SuccessContainer, SuccessText, SucessButton } from '../../../styles/buymodal';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BuyModal = ({ open, handleClose, handleOpen }) => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [value, setValue] = useState(0);
    const [sucess, setSucess] = useState(false);


    const [cardDetails, setcardDetails] = useState({
        number: "",
        name: "",
        date: "",
        cvv: "",
        upi: "",
    });
    const [cardHelper, setCardHelper] = useState({
        numbHelp: "",
        nameHelp: "",
        dateHelp: "",
        cvvHelp: "",
        upiHelp: "",
    });

    const cardNumberPattern = /^\d{16}$/;
    const datePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^\d{3}$/;

    const CheckCardNumber = (value) => {
        if (!value) {
            setCardHelper((prev) => ({
                ...prev,
                numbHelp: "Card Number is required",
            }));
            return false;
        } else if (!cardNumberPattern.test(value)) {
            setCardHelper((prev) => ({
                ...prev,
                numbHelp: "Card Number must be 16 digits",
            }));
            return false;
        } else {
            setCardHelper((prev) => ({ ...prev, numbHelp: "" }));
            return true;
        }
    };

    const CheckCardName = (value) => {
        if (!value) {
            setCardHelper((prev) => ({
                ...prev,
                nameHelp: "Cardholder Name is required",
            }));
            return false;
        } else {
            setCardHelper((prev) => ({ ...prev, nameHelp: "" }));
            return true;
        }
    };

    const CheckCardDate = (value) => {
        if (!value) {
            setCardHelper((prev) => ({
                ...prev,
                dateHelp: "Expiry Date is required",
            }));
            return false;
        } else if (!datePattern.test(value)) {
            setCardHelper((prev) => ({
                ...prev,
                dateHelp: "Expiry Date must be MM/YY",
            }));
            return false;
        } else {
            setCardHelper((prev) => ({ ...cardHelper, dateHelp: "" }));
            return true;
        }
    };

    const CheckCardCvv = (value) => {
        if (!value) {
            setCardHelper((prev) => ({ ...prev, cvvHelp: "CVV is required" }));
            return false;
        } else if (!cvvPattern.test(value)) {
            setCardHelper((prev) => ({
                ...prev,
                cvvHelp: "CVV must be 3 digits",
            }));
            return false;
        } else {
            setCardHelper((prev) => ({ ...cardHelper, cvvHelp: "" }));
            return true;
        }
    };

    const CheckUpi = (value) => {
        if (!value) {
            setCardHelper((prev) => ({
                ...prev,
                upiHelp: "UPI ID is required",
            }));
            return false;
        } else {
            setCardHelper((prev) => ({ ...prev, upiHelp: "" }));
            return true;
        }
    };

    const handlePaymentClick = () => {
        if (value == 1) {
            const number = CheckCardNumber(cardDetails.number);
            const name = CheckCardName(cardDetails.name);
            const date = CheckCardDate(cardDetails.date);
            const cvv = CheckCardCvv(cardDetails.cvv);
            if (number && name && date && cvv) {
                setSucess(true);
            }
        } else if (value == 2) {
            const upi = CheckUpi(cardDetails.upi);
            if (upi) {
                setSucess(true);
            }
        }else if(value == 3){
            setSucess(true);
        } 
        else  {
            setSucess(false);
        }
    };


    const handleDisplayBox = (event) => {
        setValue(event.target.value);
    };


    useEffect(() => {
        setCardHelper({
            numbHelp: "",
            nameHelp: "",
            dateHelp: "",
            cvvHelp: "",
            upiHelp: "",
        })
        setcardDetails({
            number: "",
            name: "",
            date: "",
            cvv: "",
            upi: "",
        })
    }, [value])



    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    backdropFilter: "blur(6px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto"
                }}
            >
                <Slide direction="down" in={open} mountOnEnter unmountOnExit>

                    {!sucess ? <ModalInnerBox>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Select Payment Method
                        </Typography>
                        <Divider sx={{ borderBottom: "2px solid #9999", margin: "10px 0 20px 0" }} />

                        <FormControl>
                            <RadioGroup
                                value={value}
                                onChange={handleDisplayBox}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value={1} label="Debit Card or Credit Card" control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} />} />
                                <FormControlLabel value={2} label="UPI" control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} />} />
                                <FormControlLabel value={3} label="Cash on Delivery" control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} />} />
                            </RadioGroup>
                        </FormControl>
                        <Box sx={{ marginTop: "30px" }} >
                            {value == 1 && <DebitCardBox>
                                <CustomTextfield
                                    fullWidth
                                    required
                                    helperText={cardHelper.numbHelp}
                                    error={cardHelper.numbHelp}
                                    onChange={(e) => {
                                        setcardDetails({
                                            ...cardDetails,
                                            number: e.target.value
                                        })
                                        CheckCardNumber(e.target.value);
                                    }}
                                    onBlur={() => CheckCardNumber(cardDetails.number)}
                                    label="Card number" />
                                <CustomTextfield
                                    fullWidth
                                    required
                                    helperText={cardHelper.nameHelp}
                                    error={cardHelper.nameHelp}
                                    onChange={(e) => {
                                        setcardDetails({
                                            ...cardDetails,
                                            name: e.target.value
                                        })
                                        CheckCardName(e.target.value);
                                    }}
                                    onBlur={() => CheckCardName(cardDetails.name)}
                                    label="Cardholder Name" />
                                <CustomTextfield
                                    fullWidth
                                    required
                                    helperText={cardHelper.dateHelp}
                                    error={cardHelper.dateHelp}
                                    onChange={(e) => {
                                        setcardDetails({
                                            ...cardDetails,
                                            date: e.target.value
                                        })
                                        CheckCardDate(e.target.value);
                                    }}
                                    onBlur={() => CheckCardDate(cardDetails.date)}
                                    label="Expiry Date (MM/YY)" />
                                <Box>
                                    <Typography variant='p'>cvv</Typography>
                                    <CustomTextfield fullWidth
                                        required

                                        helperText={cardHelper.cvvHelp}
                                        error={cardHelper.cvvHelp}
                                        onChange={(e) => {
                                            setcardDetails({
                                                ...cardDetails,
                                                cvv: e.target.value
                                            })
                                            CheckCardCvv(e.target.value);
                                        }}
                                        onBlur={() => CheckCardCvv(cardDetails.cvv)}

                                        type={showPassword ? 'text' : 'password'}
                                        slotProps={{
                                            input: {
                                                endAdornment: <InputAdornment position="end" >
                                                    <IconButton
                                                        onClick={handleClickShowPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        }}
                                    />
                                </Box>
                            </DebitCardBox>}
                            {value == 2 && <Box sx={{ margin: "20px 0 30px 0" }} >
                                <CustomTextfield
                                    fullWidth
                                    label="UPI ID"
                                    helperText={cardHelper.upiHelp}
                                    error={cardHelper.upiHelp}
                                    onChange={(e) => {
                                        setcardDetails({
                                            ...cardDetails,
                                            upi: e.target.value
                                        })
                                        CheckUpi(e.target.value);
                                    }}
                                    onBlur={() => CheckUpi(cardDetails.upi)}
                                ></CustomTextfield>
                            </Box>}
                            <PaymentButton onClick={handlePaymentClick} variant='contained' fullWidth >PROCEED TO BUY</PaymentButton>
                        </Box>
                    </ModalInnerBox>
                        :
                        <ModalInnerBox>
                            <SuccessContainer>
                                <Box>
                                    <CheckCircleIcon sx={{ color: "green", fontSize: "6.1rem" }} />
                                </Box>

                                <Typography component={"div"} variant='p' sx={{
                                    fontSize: "1.5rem",
                                    margin: "15px auto"
                                }}>
                                    Payment Successful!
                                </Typography>

                                <SuccessText variant='p' component={"div"} >Your payment has been processed successfully.</SuccessText>

                                <SucessButton variant='contained' onClick={() => navigate("/")} >CONTINUE TO SHOPPING</SucessButton>
                            </SuccessContainer>
                        </ModalInnerBox>
                    }

                </Slide>
            </Modal >
        </>
    )
}

export default BuyModal
