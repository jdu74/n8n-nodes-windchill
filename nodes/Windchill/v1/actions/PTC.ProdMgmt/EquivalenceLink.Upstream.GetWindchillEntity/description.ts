import { INodeProperties } from "n8n-workflow";

export const EquivalenceLinkUpstreamGetWindchillEntityDescription: INodeProperties[] = [
	{
		displayName: 'Path',
		name: 'path',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntity',
				],
			},
		},
		default: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				value: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				description: "Get WindchillEntity for a given WindchillEntityId - get /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				action: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				value: "GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				description: "Get WindchillEntity for a given WindchillEntityId - get /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				action: "GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
			},
		],
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntity',
				],
				path: [
					"GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'EquivalenceLinkId',
		name: 'EquivalenceLinkId-string(path)',
		description: 'Equivalence Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntity',
				],
				path: [
					"GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'WindchillEntityId',
		name: 'WindchillEntityId-string(path)',
		description: 'Windchill Entity ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntity',
				],
				path: [
					"GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntity',
				],
				path: [
					"GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				],
			},
		},
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntity',
				],
				path: [
					"GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'EquivalenceLinkId',
		name: 'EquivalenceLinkId-string(path)',
		description: 'Equivalence Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntity',
				],
				path: [
					"GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'WindchillEntityId',
		name: 'WindchillEntityId-string(path)',
		description: 'Windchill Entity ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntity',
				],
				path: [
					"GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntity',
				],
				path: [
					"GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				],
			},
		},
	},
];
