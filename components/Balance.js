import { Text } from "@chakra-ui/react";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect } from "react";
import CustomContainer from "./CustomContainer";

const Balance = ({ user }) => {
	const Web3Api = useMoralisWeb3Api();
	const fetchNativeBalance = async () => {
		const result = await Web3Api.account
			.getNativeBalance({
				chain: "rinkeby",
				address: user.get("ethAddress"),
			})
			.catch((e) => console.log(e));
		console.log(result);
	};
	useEffect(() => {
		fetchNativeBalance();
	}, []);
	return (
		<CustomContainer>
			<Text>My ERC20 Tokens</Text>
		</CustomContainer>
	);
};

export default Balance;
