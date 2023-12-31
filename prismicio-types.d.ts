// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * title field in *About*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: about.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * description field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * banner field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.banner
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>;

  /**
   * facebook field in *About*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about.facebook
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  facebook: prismic.LinkField;

  /**
   * instagram field in *About*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram: prismic.LinkField;

  /**
   * youtube field in *About*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about.youtube
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  youtube: prismic.LinkField;

  /**
   * linkedin field in *About*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about.linkedin
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin: prismic.LinkField;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

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

/**
 * Content for Post documents
 */
interface PostDocumentData {
  /**
   * cover field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.cover
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cover: prismic.ImageField<never>;

  /**
   * title field in *Post*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * description field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;

export type AllDocumentTypes = AboutDocument | HomeDocument | PostDocument;

/**
 * Default variation for Example Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExampleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Example*
 */
type ExampleSliceVariation = ExampleSliceDefault;

/**
 * Example Shared Slice
 *
 * - **API ID**: `example`
 * - **Description**: Example
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExampleSlice = prismic.SharedSlice<
  "example",
  ExampleSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      HomeDocument,
      HomeDocumentData,
      PostDocument,
      PostDocumentData,
      AllDocumentTypes,
      ExampleSlice,
      ExampleSliceVariation,
      ExampleSliceDefault,
    };
  }
}
