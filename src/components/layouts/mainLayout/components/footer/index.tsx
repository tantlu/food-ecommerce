import { Box } from "@chakra-ui/react";
import Logo from "@/components/elements/logo";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
type Props = {};

export default function Footer(props: Props) {
  return (
    <Box>
      <Box pt={5} maxW="1300px" m="0 auto">
        {/* footer_head_logo */}

        <Logo
          alt="footer_head_logo"
          source={"/assets/images/logo/kleverfood_logo.webp"}
        />

        {/* footer_content */}
        <Contact />
        {/* footer_end_logo */}
        <Logo
          alt="footer_end_logo"
          source={"/assets/images/logo/footer_logo.webp"}
        />
      </Box>
      {/* footer_copyright */}

      <Copyright />
    </Box>
  );
}
