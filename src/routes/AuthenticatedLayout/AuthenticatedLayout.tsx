import { FC, } from "react"
import { Container } from "@mui/material";


const AuthenticatedLayout : FC<{ Component: FC }> = ({ Component }) => {

    return(
        <Container sx={{ display: "flex", height: "100%" }} maxWidth={false}>
          <Component />
        </Container>
    )

}


export default AuthenticatedLayout;