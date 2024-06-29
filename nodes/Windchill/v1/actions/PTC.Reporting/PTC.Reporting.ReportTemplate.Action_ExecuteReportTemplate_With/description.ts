import { INodeProperties } from "n8n-workflow";

export const PtcReportingReportTemplateActionExecuteReportTemplateWithDescription: INodeProperties[] = [
	{
		displayName: 'Path',
		name: 'path',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
			},
		},
		default: 'POST /ExecuteReportTemplate',
		options: [
			{
				name: 'POST /ExecuteReportTemplate',
				value: 'POST /ExecuteReportTemplate',
				description: 'Executes ReportTemplate and provides XML output,It takes ReportTemplate Object reference ID as a parameter - post /ExecuteReportTemplate',
				action: 'POST /ExecuteReportTemplate',
			},
			{
				name: "POST /ReportTemplates('{ReportTemplateId}')/PTC.Reporting.ExecuteReportTemplate",
				value: "POST /ReportTemplates('{ReportTemplateId}')/PTC.Reporting.ExecuteReportTemplate",
				description: "Executes ReportTemplate and provides XML output,It takes ReportTemplate Object reference ID as a parameter - post /ReportTemplates('{ReportTemplateId}')/PTC.Reporting.ExecuteReportTemplate",
				action: "POST /ReportTemplates('{ReportTemplateId}')/PTC.Reporting.ExecuteReportTemplate",
			},
		],
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
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
				path: [
					'POST /ExecuteReportTemplate',
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
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
				path: [
					'POST /ExecuteReportTemplate',
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
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
				path: [
					'POST /ExecuteReportTemplate',
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
				displayName: 'ContainerPath',
				name: 'ContainerPath',
				description: 'Container Path - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Criteria',
				name: 'Criteria',
				description: 'Criteria - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Operator": "string",\n\t\t"Value": [\n\t\t\t"string"\n\t\t],\n\t\t"Column": "string"\n\t}\n]',
			},
			{
				displayName: 'Name',
				name: 'Name',
				description: 'Name - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
				path: [
					'POST /ExecuteReportTemplate',
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Criteria": [\n\t\t{\n\t\t\t"Operator": "string",\n\t\t\t"Value": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"Column": "string"\n\t\t}\n\t],\n\t"ContainerPath": "string",\n\t"Name": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
				path: [
					'POST /ExecuteReportTemplate',
				],
			},
		},
	},
	{
		displayName: 'ReportTemplateId',
		name: 'ReportTemplateId-string(path)',
		description: 'Report Template ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
				path: [
					"POST /ReportTemplates('{ReportTemplateId}')/PTC.Reporting.ExecuteReportTemplate",
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
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
				path: [
					"POST /ReportTemplates('{ReportTemplateId}')/PTC.Reporting.ExecuteReportTemplate",
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
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
				path: [
					"POST /ReportTemplates('{ReportTemplateId}')/PTC.Reporting.ExecuteReportTemplate",
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
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
				path: [
					"POST /ReportTemplates('{ReportTemplateId}')/PTC.Reporting.ExecuteReportTemplate",
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
				displayName: 'Criteria',
				name: 'Criteria',
				description: 'Criteria - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Operator": "string",\n\t\t"Value": [\n\t\t\t"string"\n\t\t],\n\t\t"Column": "string"\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
				path: [
					"POST /ReportTemplates('{ReportTemplateId}')/PTC.Reporting.ExecuteReportTemplate",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Criteria": [\n\t\t{\n\t\t\t"Operator": "string",\n\t\t\t"Value": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"Column": "string"\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					'PTC.Reporting.ReportTemplate.Action_ExecuteReportTemplate_With',
				],
				path: [
					"POST /ReportTemplates('{ReportTemplateId}')/PTC.Reporting.ExecuteReportTemplate",
				],
			},
		},
	},
];
