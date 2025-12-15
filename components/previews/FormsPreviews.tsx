"use client";

import { useState } from "react";
import {
  Calendar, Upload, ChevronDown, X, Check, Bold, Italic,
  Underline, List, Link, Image, Plus, Trash2, ArrowRight, ArrowLeft
} from "lucide-react";

// Input Preview
export function InputPreview() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-sm space-y-2">
      <label className="text-sm font-medium text-foreground">Email Address</label>
      <input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your email..."
        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
      />
      <p className="text-xs text-muted-foreground">We'll never share your email.</p>
    </div>
  );
}

// Textarea Preview
export function TextareaPreview() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-sm space-y-2">
      <label className="text-sm font-medium text-foreground">Message</label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write your message..."
        rows={4}
        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
      />
      <p className="text-xs text-muted-foreground">{value.length}/500 characters</p>
    </div>
  );
}

// Select Preview
export function SelectPreview() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const options = ["React", "Vue", "Angular", "Svelte", "Next.js"];

  return (
    <div className="w-full max-w-sm space-y-2">
      <label className="text-sm font-medium text-foreground">Framework</label>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        >
          <span className={value ? "text-foreground" : "text-muted-foreground"}>
            {value || "Select a framework..."}
          </span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div className="absolute z-10 w-full mt-1 py-1 bg-background border border-border rounded-xl shadow-lg">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => { setValue(opt); setOpen(false); }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors flex items-center justify-between"
              >
                {opt}
                {value === opt && <Check className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// MultiSelect Preview
export function MultiSelectPreview() {
  const [selected, setSelected] = useState<string[]>(["React", "TypeScript"]);
  const [open, setOpen] = useState(false);
  const options = ["React", "Vue", "TypeScript", "JavaScript", "Python", "Go"];

  const toggle = (opt: string) => {
    setSelected(prev =>
      prev.includes(opt) ? prev.filter(s => s !== opt) : [...prev, opt]
    );
  };

  return (
    <div className="w-full max-w-sm space-y-2">
      <label className="text-sm font-medium text-foreground">Skills</label>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full px-3 py-2 rounded-xl border border-border bg-background text-left flex flex-wrap gap-1.5 min-h-[42px] focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          {selected.length > 0 ? (
            selected.map(s => (
              <span key={s} className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-lg">
                {s}
                <X className="w-3 h-3 cursor-pointer hover:text-primary/70" onClick={(e) => { e.stopPropagation(); toggle(s); }} />
              </span>
            ))
          ) : (
            <span className="text-muted-foreground text-sm">Select skills...</span>
          )}
        </button>
        {open && (
          <div className="absolute z-10 w-full mt-1 py-1 bg-background border border-border rounded-xl shadow-lg max-h-48 overflow-auto">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => toggle(opt)}
                className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors flex items-center gap-2"
              >
                <div className={`w-4 h-4 rounded border ${selected.includes(opt) ? "bg-primary border-primary" : "border-border"} flex items-center justify-center`}>
                  {selected.includes(opt) && <Check className="w-3 h-3 text-white" />}
                </div>
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// DatePicker Preview
export function DatePickerPreview() {
  const [date, setDate] = useState<string>("");
  const [open, setOpen] = useState(false);
  const today = new Date();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-sm space-y-2">
      <label className="text-sm font-medium text-foreground">Date</label>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <span className={date ? "text-foreground" : "text-muted-foreground"}>
            {date || "Pick a date..."}
          </span>
          <Calendar className="w-4 h-4 text-muted-foreground" />
        </button>
        {open && (
          <div className="absolute z-10 w-64 mt-1 p-3 bg-background border border-border rounded-xl shadow-lg">
            <div className="text-center font-medium mb-2">
              {today.toLocaleString('default', { month: 'long' })} {today.getFullYear()}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                <div key={d} className="text-muted-foreground py-1">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {days.slice(0, 28).map(d => (
                <button
                  key={d}
                  onClick={() => { setDate(`${today.getMonth() + 1}/${d}/${today.getFullYear()}`); setOpen(false); }}
                  className={`p-1.5 text-sm rounded-lg hover:bg-primary/10 ${d === today.getDate() ? "bg-primary text-white" : ""}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// FileUpload Preview
export function FileUploadPreview() {
  const [files, setFiles] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = () => {
    setFiles(["document.pdf", "image.png"]);
    setDragOver(false);
  };

  return (
    <div className="w-full max-w-sm space-y-2">
      <label className="text-sm font-medium text-foreground">Upload Files</label>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); handleDrop(); }}
        onClick={handleDrop}
        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
          dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
        }`}
      >
        <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
        <p className="text-sm text-foreground">Drop files here or click to upload</p>
        <p className="text-xs text-muted-foreground mt-1">PNG, JPG, PDF up to 10MB</p>
      </div>
      {files.length > 0 && (
        <div className="space-y-1">
          {files.map(f => (
            <div key={f} className="flex items-center justify-between px-3 py-2 bg-muted rounded-lg text-sm">
              <span>{f}</span>
              <X className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" onClick={() => setFiles(files.filter(x => x !== f))} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// RichTextEditor Preview
export function RichTextEditorPreview() {
  const [content, setContent] = useState("Start typing your content here...");

  return (
    <div className="w-full max-w-md space-y-2">
      <label className="text-sm font-medium text-foreground">Content</label>
      <div className="border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-1 px-2 py-1.5 bg-muted/50 border-b border-border">
          {[Bold, Italic, Underline].map((Icon, i) => (
            <button key={i} className="p-1.5 rounded hover:bg-muted transition-colors">
              <Icon className="w-4 h-4" />
            </button>
          ))}
          <div className="w-px h-4 bg-border mx-1" />
          {[List, Link, Image].map((Icon, i) => (
            <button key={i} className="p-1.5 rounded hover:bg-muted transition-colors">
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 bg-background text-foreground resize-none focus:outline-none min-h-[100px]"
        />
      </div>
    </div>
  );
}

// OtpInput Preview
export function OtpInputPreview() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <div className="space-y-3 text-center">
      <label className="text-sm font-medium text-foreground block">Enter verification code</label>
      <div className="flex gap-2 justify-center">
        {otp.map((digit, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-10 h-12 text-center text-lg font-semibold rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground">Didn't receive code? <span className="text-primary cursor-pointer">Resend</span></p>
    </div>
  );
}

// Checkbox Preview
export function CheckboxPreview() {
  const [checked, setChecked] = useState([true, false, false]);
  const labels = ["Email notifications", "Push notifications", "SMS alerts"];

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground block">Notification Settings</label>
      {labels.map((label, i) => (
        <label key={i} className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={() => {
              const newChecked = [...checked];
              newChecked[i] = !newChecked[i];
              setChecked(newChecked);
            }}
            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
              checked[i] ? "bg-primary border-primary" : "border-border group-hover:border-primary/50"
            }`}
          >
            {checked[i] && <Check className="w-3 h-3 text-white" />}
          </div>
          <span className="text-sm text-foreground">{label}</span>
        </label>
      ))}
    </div>
  );
}

// RadioGroup Preview
export function RadioGroupPreview() {
  const [selected, setSelected] = useState("medium");
  const options = [
    { value: "small", label: "Small", desc: "4 GB RAM" },
    { value: "medium", label: "Medium", desc: "8 GB RAM" },
    { value: "large", label: "Large", desc: "16 GB RAM" },
  ];

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground block">Instance Size</label>
      {options.map((opt) => (
        <label
          key={opt.value}
          onClick={() => setSelected(opt.value)}
          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
            selected === opt.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
          }`}
        >
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selected === opt.value ? "border-primary" : "border-border"
          }`}>
            {selected === opt.value && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">{opt.label}</div>
            <div className="text-xs text-muted-foreground">{opt.desc}</div>
          </div>
        </label>
      ))}
    </div>
  );
}

// Switch Preview
export function SwitchPreview() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center justify-between w-full max-w-xs p-4 rounded-xl border border-border">
      <div>
        <div className="text-sm font-medium text-foreground">Dark Mode</div>
        <div className="text-xs text-muted-foreground">Enable dark theme</div>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative w-11 h-6 rounded-full transition-colors ${enabled ? "bg-primary" : "bg-muted"}`}
      >
        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${enabled ? "translate-x-6" : "translate-x-1"}`} />
      </button>
    </div>
  );
}

// Slider Preview
export function SliderPreview() {
  const [value, setValue] = useState(65);

  return (
    <div className="w-full max-w-xs space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">Volume</label>
        <span className="text-sm text-muted-foreground">{value}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
        style={{
          background: `linear-gradient(to right, hsl(var(--primary)) ${value}%, hsl(var(--muted)) ${value}%)`
        }}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
}

// Form Preview
export function FormPreview() {
  return (
    <div className="w-full max-w-sm space-y-4 p-4 border border-border rounded-xl">
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Email</label>
        <input
          type="email"
          placeholder="john@example.com"
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <button className="w-full py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
        Submit
      </button>
    </div>
  );
}

// MultiStepForm Preview
export function MultiStepFormPreview() {
  const [step, setStep] = useState(1);
  const steps = ["Account", "Profile", "Review"];

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Steps indicator */}
      <div className="flex items-center justify-between">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              i + 1 <= step ? "bg-primary text-white" : "bg-muted text-muted-foreground"
            }`}>
              {i + 1 <= step ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className={`w-16 h-1 mx-2 rounded ${i + 1 < step ? "bg-primary" : "bg-muted"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="p-4 border border-border rounded-xl">
        <h3 className="font-medium text-foreground mb-3">{steps[step - 1]}</h3>
        <input
          type="text"
          placeholder={step === 1 ? "Email address" : step === 2 ? "Display name" : "Confirm details"}
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <div className="flex gap-2">
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} className="flex-1 py-2 border border-border rounded-lg text-sm hover:bg-muted transition-colors flex items-center justify-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          )}
          <button
            onClick={() => setStep(Math.min(step + 1, 3))}
            className="flex-1 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-1"
          >
            {step === 3 ? "Submit" : "Next"} {step < 3 && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

// MultiStepFormDialog Preview
export function MultiStepFormDialogPreview() {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(1);

  return (
    <div className="relative">
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
        Open Wizard
      </button>

      {open && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ minHeight: "300px" }}>
          <div className="w-80 bg-background border border-border rounded-xl shadow-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <h3 className="font-medium text-foreground">Setup Wizard</h3>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3].map(s => (
                  <div key={s} className={`flex-1 h-1 rounded ${s <= step ? "bg-primary" : "bg-muted"}`} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-3">Step {step} of 3</p>
              <input
                type="text"
                placeholder="Enter details..."
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="px-4 py-3 border-t border-border flex gap-2">
              {step > 1 && (
                <button onClick={() => setStep(step - 1)} className="flex-1 py-2 border border-border rounded-lg text-sm">
                  Back
                </button>
              )}
              <button
                onClick={() => step < 3 ? setStep(step + 1) : setOpen(false)}
                className="flex-1 py-2 bg-primary text-white rounded-lg text-sm"
              >
                {step === 3 ? "Finish" : "Continue"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// FieldArray Preview
export function FieldArrayPreview() {
  const [fields, setFields] = useState([
    { id: 1, value: "john@example.com" },
    { id: 2, value: "jane@example.com" },
  ]);

  const addField = () => {
    setFields([...fields, { id: Date.now(), value: "" }]);
  };

  const removeField = (id: number) => {
    setFields(fields.filter(f => f.id !== id));
  };

  return (
    <div className="w-full max-w-sm space-y-3">
      <label className="text-sm font-medium text-foreground block">Team Members</label>
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2">
          <input
            type="email"
            value={field.value}
            onChange={(e) => {
              const newFields = [...fields];
              newFields[index].value = e.target.value;
              setFields(newFields);
            }}
            placeholder="Email address"
            className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            onClick={() => removeField(field.id)}
            className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
      <button
        onClick={addField}
        className="w-full py-2 border border-dashed border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-1"
      >
        <Plus className="w-4 h-4" /> Add Member
      </button>
    </div>
  );
}
