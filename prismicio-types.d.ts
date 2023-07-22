// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * title field in *Home*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * subtitle field in *Home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * linkAction field in *Home*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: home.linkaction
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkaction: prismic.LinkField;

  /**
   * mobileTitle field in *Home*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: home.mobiletitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  mobiletitle: prismic.TitleField;

  /**
   * mobileContent field in *Home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.mobilecontent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  mobilecontent: prismic.RichTextField;

  /**
   * mobileImage field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.mobileimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  mobileimage: prismic.ImageField<never>;

  /**
   * webImage field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.webimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  webimage: prismic.ImageField<never>;

  /**
   * webTitle field in *Home*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: home.webtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  webtitle: prismic.TitleField;

  /**
   * webContent field in *Home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.webcontent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  webcontent: prismic.RichTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type { HomeDocument, HomeDocumentData, AllDocumentTypes };
  }
}
