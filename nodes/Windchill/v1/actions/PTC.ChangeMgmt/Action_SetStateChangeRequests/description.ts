import { INodeProperties } from "n8n-workflow";

export const ActionSetStateChangeRequestsDescription: INodeProperties[] = [
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
						displayName: '$filter',
						name: '$filter-string(query)',
						description: 'Filter - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$top',
						name: '$top-integer(query)',
						description: 'Top - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$skip',
						name: '$skip-integer(query)',
						description: 'Skip - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$count',
						name: '$count-boolean(query)',
						description: 'Whether Count - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: '$orderby',
						name: '$orderby-string(query)',
						description: 'Orderby - string (query)',
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
					'PTC.ChangeMgmt',
				],
				operation: [
					'POST /SetStateChangeRequests',
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
					'PTC.ChangeMgmt',
				],
				operation: [
					'POST /SetStateChangeRequests',
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
					'PTC.ChangeMgmt',
				],
				operation: [
					'POST /SetStateChangeRequests',
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
				displayName: '* ChangeRequests',
				name: 'ChangeRequests',
				description: 'Change Requests - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Latest": true,\n\t\t"LatestRevision": true,\n\t\t"Category": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"ResolutionDate": "string",\n\t\t"ModifiedBy": "string",\n\t\t"Version": "string",\n\t\t"ProposedSolution": "string",\n\t\t"ProposedSolutionSummary": "string",\n\t\t"Identity": "string",\n\t\t"LastModified": "string",\n\t\t"CreatedBy": "string",\n\t\t"ChangeAdminI": [\n\t\t\t{\n\t\t\t\t"PrincipalID": "string",\n\t\t\t\t"DisplayName": "string"\n\t\t\t}\n\t\t],\n\t\t"Revision": "string",\n\t\t"LifeCycleTemplateName": "string",\n\t\t"FolderName": "string",\n\t\t"TeamTemplateName": "string",\n\t\t"NeedDate": "string",\n\t\t"ReservedBy": "string",\n\t\t"Complexity": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"ObjectType": "string",\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"RecurringCost": "string",\n\t\t"State": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"RequestPriority": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"Number": "string",\n\t\t"FolderLocation": "string",\n\t\t"IsRemote": true,\n\t\t"Description": "string",\n\t\t"Uri": "string",\n\t\t"TypeIcon": {\n\t\t\t"Path": "string",\n\t\t\t"Tooltip": "string"\n\t\t},\n\t\t"NonRecurringCost": "string",\n\t\t"Name": "string",\n\t\t"CabinetName": "string",\n\t\t"DescriptionSummary": "string",\n\t\t"VersionID": "string"\n\t}\n]',
			},
			{
				displayName: '* State',
				name: 'State',
				description: 'State - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					'POST /SetStateChangeRequests',
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
		default: '{\n\t"ChangeRequests": [\n\t\t{\n\t\t\t"Latest": true,\n\t\t\t"LatestRevision": true,\n\t\t\t"Category": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"ResolutionDate": "string",\n\t\t\t"ModifiedBy": "string",\n\t\t\t"Version": "string",\n\t\t\t"ProposedSolution": "string",\n\t\t\t"ProposedSolutionSummary": "string",\n\t\t\t"Identity": "string",\n\t\t\t"LastModified": "string",\n\t\t\t"CreatedBy": "string",\n\t\t\t"ChangeAdminI": [\n\t\t\t\t{\n\t\t\t\t\t"PrincipalID": "string",\n\t\t\t\t\t"DisplayName": "string"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"Revision": "string",\n\t\t\t"LifeCycleTemplateName": "string",\n\t\t\t"FolderName": "string",\n\t\t\t"TeamTemplateName": "string",\n\t\t\t"NeedDate": "string",\n\t\t\t"ReservedBy": "string",\n\t\t\t"Complexity": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"ObjectType": "string",\n\t\t\t"CreatedOn": "string",\n\t\t\t"ID": "string",\n\t\t\t"RecurringCost": "string",\n\t\t\t"State": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"RequestPriority": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"Number": "string",\n\t\t\t"FolderLocation": "string",\n\t\t\t"IsRemote": true,\n\t\t\t"Description": "string",\n\t\t\t"Uri": "string",\n\t\t\t"TypeIcon": {\n\t\t\t\t"Path": "string",\n\t\t\t\t"Tooltip": "string"\n\t\t\t},\n\t\t\t"NonRecurringCost": "string",\n\t\t\t"Name": "string",\n\t\t\t"CabinetName": "string",\n\t\t\t"DescriptionSummary": "string",\n\t\t\t"VersionID": "string"\n\t\t}\n\t],\n\t"State": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					'POST /SetStateChangeRequests',
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
