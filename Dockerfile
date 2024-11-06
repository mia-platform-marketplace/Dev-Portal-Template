FROM nexus.mia-platform.eu/dev-portal/marketplace:2.2.0 as dev-portal-marketplace

########################################################################################################################

FROM nginx:1.23.3-alpine as build

# - stop vulnerabilities:package CRITICAL Vulnerability found in os package type (APKG) - curl (fixed in: 7.87.0-r2)(CVE-2023-23914 - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-23914)
# - stop vulnerabilities:package HIGH Vulnerability found in os package type (APKG) - curl (fixed in: 7.87.0-r2)(CVE-2023-23916 - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-23916)
# - stop vulnerabilities:package CRITICAL Vulnerability found in os package type (APKG) - libcurl (fixed in: 7.87.0-r2)(CVE-2023-23914 - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-23914)
# - stop vulnerabilities:package HIGH Vulnerability found in os package type (APKG) - libcurl (fixed in: 7.87.0-r2)(CVE-2023-23916 - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-23916)
# - stop vulnerabilities:package HIGH Vulnerability found in os package type (APKG) - tiff (fixed in: 4.4.0-r2)(CVE-2022-3970 - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-3970)
RUN apk add --no-cache --upgrade curl libcurl tiff

ARG COMMIT_SHA

LABEL name="mia_template_service_name_placeholder" \
      description="%CUSTOM_PLUGIN_SERVICE_DESCRIPTION%" \
      eu.mia-platform.url="https://www.mia-platform.eu" \
      eu.mia-platform.version="0.1.0"

COPY nginx /etc/nginx

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "mia_template_service_name_placeholder: $COMMIT_SHA" >> /etc/nginx/commit.sha

WORKDIR /usr/static

COPY --from=dev-portal-marketplace /usr/static ./dev-portal-marketplace

COPY ./packages/home/build ./dev-portal-home
COPY ./build ./dev-portal-documentation

USER nginx
