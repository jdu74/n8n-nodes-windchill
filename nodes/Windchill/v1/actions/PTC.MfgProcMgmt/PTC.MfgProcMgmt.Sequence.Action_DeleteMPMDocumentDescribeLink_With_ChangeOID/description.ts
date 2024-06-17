import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtSequenceActionDeleteMpmDocumentDescribeLinkWithChangeOidDescription: INodeProperties[] = [
	{
		displayName: 'SequenceId',
		name: 'SequenceId-string(path)',
		description: 'Sequence ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
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
					{
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				],
			},
		},
	},
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
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
				displayName: 'ChangeOID',
				name: 'ChangeOID',
				description: 'Change Oid - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* LinksOIDs',
				name: 'LinksOIDs',
				description: 'Links Oi Ds - array',
				type: 'json',
				default: '[\n\t{\n\t\t"ID": "string"\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
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
		default: '{\n\t"LinksOIDs": [\n\t\t{\n\t\t\t"ID": "string"\n\t\t}\n\t],\n\t"ChangeOID": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
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
