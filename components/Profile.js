import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import CustomContainer from "./CustomContainer";

const Profile = ({ user }) => {
	const { setUserData, isUserUpdating } = useMoralis();
	const [username, setUsername] = useState("");
	return (
		<CustomContainer>
			<Text>
				<b>🤓&nbsp; Username: </b> {user.getUsername()}
			</Text>
			<Text>
				<b>💰&nbsp; Wallet Address: </b> {user.get("ethAddress")}
			</Text>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (username.trim() !== "") {
						setUserData({
							username,
						}).then(() => setUsername(""));
					}
				}}
			>
				<FormControl mt="6" mb="6">
					<FormLabel htmlFor="username">Set a new username</FormLabel>
					<Input
						id="username"
						type="text"
						placeholder="your name"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</FormControl>
				<Button type="submit" colorScheme="purple" disabled={isUserUpdating}>
					Change Username
				</Button>
			</form>
		</CustomContainer>
	);
};

export default Profile;
