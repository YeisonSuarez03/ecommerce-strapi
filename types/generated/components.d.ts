import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAttributeSelector extends Struct.ComponentSchema {
  collectionName: 'components_shared_attribute_selectors';
  info: {
    displayName: 'AttributeSelector';
    icon: 'bulletList';
  };
  attributes: {
    attribute: Schema.Attribute.Relation<
      'oneToOne',
      'api::attribute.attribute'
    >;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
    icon: 'cast';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.linl', true>;
    logo: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.linl', true>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedLinl extends Struct.ComponentSchema {
  collectionName: 'components_shared_linls';
  info: {
    displayName: 'Link';
    icon: 'apps';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isPrimary: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SharedPriceSelector extends Struct.ComponentSchema {
  collectionName: 'components_shared_price_selectors';
  info: {
    displayName: 'PriceSelector';
    icon: 'command';
  };
  attributes: {
    price_types: Schema.Attribute.Relation<
      'oneToMany',
      'api::price-type.price-type'
    >;
    value: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface TemplatesWhatsappTemplate extends Struct.ComponentSchema {
  collectionName: 'components_templates_whatsapp_templates';
  info: {
    displayName: 'Whatsapp Order Template';
    icon: 'bulletList';
  };
  attributes: {
    FinalSummary: Schema.Attribute.Text;
    Greetings: Schema.Attribute.Text;
    phoneNumer: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    ProductsVariables: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.attribute-selector': SharedAttributeSelector;
      'shared.banner': SharedBanner;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.linl': SharedLinl;
      'shared.price-selector': SharedPriceSelector;
      'templates.whatsapp-template': TemplatesWhatsappTemplate;
    }
  }
}
