/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import PageTitle from "../../components/PageTitle";

import {
  Block,
  Container,
  P,
  Separator,
} from "./components";
import SocialLink from "./SocialLink";

const LINKS = [
  {
    name: "GitHub",
    link: "https://github.com/EricDosReis/won-games-api",
  },
];

const HomePage = () => {
  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {(title) => <PageTitle title={title} />}
      </FormattedMessage>

      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <h2 id="mainHeader">Bem vindo a Won Games!</h2>
              <P>
                Ao lado você pode inserir diferentes jogos, categorias e
                publishers para a nossa maravilhosa loja de jogos!{" "}
              </P>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <h2>Veja nossos links!</h2>

              <Separator style={{ marginTop: 17 }} />

              <div
                className="row social-wrapper"
                style={{
                  display: "flex",
                  margin: 0,
                  marginTop: 20,
                  marginLeft: -15,
                }}
              >
                {LINKS.map((value, key) => (
                  <SocialLink key={key} {...value} />
                ))}
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
