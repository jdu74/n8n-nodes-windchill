import { INodeProperties } from "n8n-workflow";

export const ActionUpdateToCurrentUpstreamEquivalentsDescription: INodeProperties[] = [
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
					'PTC.BomTransformation',
				],
				operation: [
					'POST /UpdateToCurrentUpstreamEquivalents',
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
					'PTC.BomTransformation',
				],
				operation: [
					'POST /UpdateToCurrentUpstreamEquivalents',
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
					'PTC.BomTransformation',
				],
				operation: [
					'POST /UpdateToCurrentUpstreamEquivalents',
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
				displayName: 'ChangeOid',
				name: 'ChangeOid',
				description: 'Change Oid - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'DoCopyOver',
				name: 'DoCopyOver',
				description: 'Whether Do Copy Over - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: '* DownstreamNavigationCriteria',
				name: 'DownstreamNavigationCriteria',
				description: 'Downstream Navigation Criteria - object',
				type: 'json',
				default: '{\n\t"CreatedOn": "string",\n\t"ID": "string",\n\t"ApplyToTopLevelObject": true,\n\t"Name": "string",\n\t"ConfigSpecs": [\n\t\t{}\n\t],\n\t"UseDefaultForUnresolved": true,\n\t"ApplicationName": "string",\n\t"LastModified": "string",\n\t"SharedToAll": true,\n\t"HideUnresolvedDependents": true,\n\t"Centricity": true,\n\t"ApplicableType": "string",\n\t"Filters": [\n\t\t{}\n\t]\n}',
			},
			{
				displayName: '* DownstreamParts',
				name: 'DownstreamParts',
				description: 'Downstream Parts - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Latest": true,\n\t\t"Supersedes": {\n\t\t\t"Path": "string",\n\t\t\t"Tooltip": "string"\n\t\t},\n\t\t"CheckoutState": "string",\n\t\t"WorkInProgressState": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"ModifiedBy": "string",\n\t\t"View": "string",\n\t\t"Version": "string",\n\t\t"Identity": "string",\n\t\t"ChangeStatus": {\n\t\t\t"Path": "string",\n\t\t\t"Tooltip": "string"\n\t\t},\n\t\t"Source": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"LastModified": "string",\n\t\t"CreatedBy": "string",\n\t\t"DefaultUnit": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"EndItem": true,\n\t\t"GeneralStatus": {\n\t\t\t"Path": "string",\n\t\t\t"Tooltip": "string"\n\t\t},\n\t\t"BOMType": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"CheckOutStatus": "string",\n\t\t"Revision": "string",\n\t\t"AlternateNumber": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"LifeCycleTemplateName": "string",\n\t\t"FolderName": "string",\n\t\t"DefaultTraceCode": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"ObjectType": "string",\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"State": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"GatheringPart": true,\n\t\t"Number": "string",\n\t\t"FolderLocation": "string",\n\t\t"TypeIcon": {\n\t\t\t"Path": "string",\n\t\t\t"Tooltip": "string"\n\t\t},\n\t\t"PhantomManufacturingPart": true,\n\t\t"Comments": "string",\n\t\t"Name": "string",\n\t\t"AssemblyMode": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"CabinetName": "string",\n\t\t"VersionID": "string",\n\t\t"ConfigurableModule": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"ShareStatus": {\n\t\t\t"Path": "string",\n\t\t\t"Tooltip": "string"\n\t\t}\n\t}\n]',
			},
			{
				displayName: '* UpstreamNavigationCriteria',
				name: 'UpstreamNavigationCriteria',
				description: 'Upstream Navigation Criteria - object',
				type: 'json',
				default: '{\n\t"CreatedOn": "string",\n\t"ID": "string",\n\t"ApplyToTopLevelObject": true,\n\t"Name": "string",\n\t"ConfigSpecs": [\n\t\t{}\n\t],\n\t"UseDefaultForUnresolved": true,\n\t"ApplicationName": "string",\n\t"LastModified": "string",\n\t"SharedToAll": true,\n\t"HideUnresolvedDependents": true,\n\t"Centricity": true,\n\t"ApplicableType": "string",\n\t"Filters": [\n\t\t{}\n\t]\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					'POST /UpdateToCurrentUpstreamEquivalents',
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
		default: '{\n\t"DoCopyOver": true,\n\t"ChangeOid": "string",\n\t"DownstreamNavigationCriteria": {\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"ApplyToTopLevelObject": true,\n\t\t"Name": "string",\n\t\t"ConfigSpecs": [\n\t\t\t{}\n\t\t],\n\t\t"UseDefaultForUnresolved": true,\n\t\t"ApplicationName": "string",\n\t\t"LastModified": "string",\n\t\t"SharedToAll": true,\n\t\t"HideUnresolvedDependents": true,\n\t\t"Centricity": true,\n\t\t"ApplicableType": "string",\n\t\t"Filters": [\n\t\t\t{}\n\t\t]\n\t},\n\t"DownstreamParts": [\n\t\t{\n\t\t\t"Latest": true,\n\t\t\t"Supersedes": {\n\t\t\t\t"Path": "string",\n\t\t\t\t"Tooltip": "string"\n\t\t\t},\n\t\t\t"CheckoutState": "string",\n\t\t\t"WorkInProgressState": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"ModifiedBy": "string",\n\t\t\t"View": "string",\n\t\t\t"Version": "string",\n\t\t\t"Identity": "string",\n\t\t\t"ChangeStatus": {\n\t\t\t\t"Path": "string",\n\t\t\t\t"Tooltip": "string"\n\t\t\t},\n\t\t\t"Source": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"LastModified": "string",\n\t\t\t"CreatedBy": "string",\n\t\t\t"DefaultUnit": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"EndItem": true,\n\t\t\t"GeneralStatus": {\n\t\t\t\t"Path": "string",\n\t\t\t\t"Tooltip": "string"\n\t\t\t},\n\t\t\t"BOMType": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"CheckOutStatus": "string",\n\t\t\t"Revision": "string",\n\t\t\t"AlternateNumber": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"LifeCycleTemplateName": "string",\n\t\t\t"FolderName": "string",\n\t\t\t"DefaultTraceCode": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"ObjectType": "string",\n\t\t\t"CreatedOn": "string",\n\t\t\t"ID": "string",\n\t\t\t"State": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"GatheringPart": true,\n\t\t\t"Number": "string",\n\t\t\t"FolderLocation": "string",\n\t\t\t"TypeIcon": {\n\t\t\t\t"Path": "string",\n\t\t\t\t"Tooltip": "string"\n\t\t\t},\n\t\t\t"PhantomManufacturingPart": true,\n\t\t\t"Comments": "string",\n\t\t\t"Name": "string",\n\t\t\t"AssemblyMode": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"CabinetName": "string",\n\t\t\t"VersionID": "string",\n\t\t\t"ConfigurableModule": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"ShareStatus": {\n\t\t\t\t"Path": "string",\n\t\t\t\t"Tooltip": "string"\n\t\t\t}\n\t\t}\n\t],\n\t"UpstreamNavigationCriteria": {\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"ApplyToTopLevelObject": true,\n\t\t"Name": "string",\n\t\t"ConfigSpecs": [\n\t\t\t{}\n\t\t],\n\t\t"UseDefaultForUnresolved": true,\n\t\t"ApplicationName": "string",\n\t\t"LastModified": "string",\n\t\t"SharedToAll": true,\n\t\t"HideUnresolvedDependents": true,\n\t\t"Centricity": true,\n\t\t"ApplicableType": "string",\n\t\t"Filters": [\n\t\t\t{}\n\t\t]\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					'POST /UpdateToCurrentUpstreamEquivalents',
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
