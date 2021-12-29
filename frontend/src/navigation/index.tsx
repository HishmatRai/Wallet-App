import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Intro from "../screens/intro";
import Welcome from "../screens/welcome";
import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signup";
import EnterPin from "../screens/auth/enterpin";
import ForgotPassword from "../screens/auth/forgotpassword";
import CheckYourEmail from "../screens/auth/checkyouremail";
import NewPassword from "../screens/auth/newpassword";
import CreatePin from "../screens/auth/createpin";
import CreatePinConfirm from "../screens/auth/createpinconfirm";
import Kyc from "../screens/emptystate/kyc";
import DrawerContent from "./../screens/drawerontent";
import KycPending from "../screens/emptystate/kycpending";
import Whollet from "../screens/emptystate/whollet";
import Transactions from "../screens/emptystate/transactions";
import Portfolio from "../screens/emptystate/portfolio";
import PersonalInformation from "../screens/kyc/personalinformation";
import DocumentVerification from "../screens/kyc/documentverification";
import ScanFrontSide from "../screens/kyc/scanfrontside";
import ScanBackSide from "../screens/kyc/scanbackside";
import NationalIDScan from "../screens/kyc/nationalidscan";
import Pending from "../screens/kyc/pending";
import WalletOverview from "./../screens/wallet/walletoverview";
import SpecificCoin from "./../screens/wallet/specificcoin";
import AllAssets from "./../screens/wallet/allassets";
import AllTransactions from "./../screens/wallet/alltransactions";
import AllTransactionFilters from "./../screens/wallet/alltransactionfilters";
import Profile from "../screens/profileAndSettings/profile";
import UserInformation from "../screens/profileAndSettings/userInformation";
import VerifyNumber from "../screens/profileAndSettings/verifyNumber";
import VerifyNumberOtp from "../screens/profileAndSettings/verifyNumberOtp";
import VerificationDone from "../screens/profileAndSettings/verificationDone";
import Security from "../screens/profileAndSettings/Security";
import ChangePassword from "../screens/profileAndSettings/ChangePassword";
import TwoFactorVerification from "../screens/profileAndSettings/TwoFactorVerification";
import TwoFactorVerificationCode from "../screens/profileAndSettings/TwoFactorVerificationCode";
import ChangePin from "../screens/profileAndSettings/ChangePin";
import TransactionConfirm from "../screens/Exchange/TransactionConfirm";
import TransactionDetails from "../screens/Exchange/TransactionDetails";
import SendToFriend from "../screens/Send/SendToFriend";
import ChooseRecipient from "../screens/Send/ChooseRecipient";
import AddMessage from "../screens/Send/AddMessage";
import MessageConfirm from "../screens/Send/MessageConfirm";
import MessageDetails from "../screens/Send/MessageDetails";
import Amount from "../screens/Withdrawal/Amount";
import WithdrawalAddress from "../screens/Withdrawal/WithdrawalAddress";
import ScanQrCode from "../screens/Withdrawal/ScanQrCode";
import Confirmation from "../screens/Withdrawal/Confirmation";
import WithdrawalDetails from "../screens/Withdrawal/WithdrawalDetails";
import WithdrawalTransactionDetails from "../screens/wallet/WithdrawalTransactionDetails";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{
        width: "75%",
        height: 320,
        marginTop: 170,
        backgroundColor: "#4A95FA",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      }}
      screenOptions={{
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        name="Kyc"
        component={Kyc}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="KycPending"
        component={KycPending}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Whollet"
        component={Whollet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Transactions"
        component={Transactions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Portfolio"
        component={Portfolio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WalletOverview"
        component={WalletOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpecificCoin"
        component={SpecificCoin}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterPin"
          component={EnterPin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckYourEmail"
          component={CheckYourEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatePin"
          component={CreatePin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatePinConfirm"
          component={CreatePinConfirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllTransactionFilters"
          component={AllTransactionFilters}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WithdrawalTransactionDetails"
          component={WithdrawalTransactionDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllTransactions"
          component={AllTransactions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllAssets"
          component={AllAssets}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePin"
          component={ChangePin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TwoFactorVerificationCode"
          component={TwoFactorVerificationCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TwoFactorVerification"
          component={TwoFactorVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Security"
          component={Security}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationDone"
          component={VerificationDone}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyNumberOtp"
          component={VerifyNumberOtp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyNumber"
          component={VerifyNumber}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserInformation"
          component={UserInformation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DocumentVerification"
          component={DocumentVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScanFrontSide"
          component={ScanFrontSide}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScanBackSide"
          component={ScanBackSide}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NationalIDScan"
          component={NationalIDScan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pending"
          component={Pending}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WithdrawalDetails"
          component={WithdrawalDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScanQrCode"
          component={ScanQrCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WithdrawalAddress"
          component={WithdrawalAddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Amount"
          component={Amount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageDetails"
          component={MessageDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageConfirm"
          component={MessageConfirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddMessage"
          component={AddMessage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChooseRecipient"
          component={ChooseRecipient}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SendToFriend"
          component={SendToFriend}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransactionDetails"
          component={TransactionDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransactionConfirm"
          component={TransactionConfirm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
