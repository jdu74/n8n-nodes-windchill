import { INodeProperties } from "n8n-workflow";

export const ActionDeleteAssociationsDescription: INodeProperties[] = [
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /DeleteAssociations',
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /DeleteAssociations',
				],
				jsonContentType: [
					'application/json',
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: '* PartDocAssociations',
				name: 'PartDocAssociations',
				description: 'Part Doc Associations - array',
				type: 'json',
				default: '[\n\t{\n\t\t"AssociationType": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"@odata.type": "string",\n\t\t"RelatedPart@odata.bind": "string",\n\t\t"RelatedCADDoc@odata.bind": "string"\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /DeleteAssociations',
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"PartDocAssociations": [\n\t\t{\n\t\t\t"AssociationType": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"@odata.type": "string",\n\t\t\t"RelatedPart@odata.bind": "string",\n\t\t\t"RelatedCADDoc@odata.bind": "string"\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /DeleteAssociations',
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					true,
				],
			},
		},
	},
];
