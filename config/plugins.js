module.exports = ({ env }) => ({
    'import-export-entries': {
        enabled: true,
        config: {
          // See `Config` section.
        },
      },
      'publisher': {
		enabled: true,
		config: {
			hooks: {
				beforePublish: async ({ strapi, uid, entity }) => {
					console.log('beforePublish');
				},
				afterPublish: async ({ strapi, uid, entity }) => {
					console.log('afterPublish');
				},
				beforeUnpublish: async ({ strapi, uid, entity }) => {
					console.log('beforeUnpublish');
				},
				afterUnpublish: async ({ strapi, uid, entity }) => {
					console.log('afterUnpublish');
				},
			},
		},
	},
    // ...
    email: {
		config: {
		  provider: 'nodemailer',
		  providerOptions: {
			host: env('SMTP_HOST'),
			port: env('SMTP_PORT'),
			auth: {
			  user: env('SMTP_USERNAME'),
			  pass: env('SMTP_PASSWORD'),
			},
			// ... any custom nodemailer options
		  },
		  settings: {
			defaultFrom: env('SMTP_USERNAME'),
			defaultReplyTo: env('SMTP_USERNAME'),
		  },
		},
	  },
});
